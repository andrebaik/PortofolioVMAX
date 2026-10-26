const {
  createSystemMessage,
  streamChatCompletion,
  validateWithFastModel,
} = require("../services/aiService");
const {
  validateInput,
  validateOutput,
  validateOutputContent,
  postProcessResponse,
  FALLBACK_RESPONSES,
} = require("../utils/aiGuardrails");

// Helper function to send SSE fallback response
const sendFallbackSSE = (res, fallbackMessage) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.write(`data: ${JSON.stringify({ content: fallbackMessage })}\n\n`);
  res.write("data: [DONE]\n\n");
  return res.end();
};

// Streaming completion handler for SSE (/api/chat/stream)
async function streamChat(req, res) {
  try {
    let message = req.query.message || req.body?.message;

    if (!message && Array.isArray(req.body?.messages) && req.body.messages.length > 0) {
      const last = req.body.messages[req.body.messages.length - 1];
      message = last.content;
    }

    // Step 0: Basic validation
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message is required and must be non-empty" });
    }

    const trimmedMessage = message.trim();
    const MAX_MESSAGE_LENGTH = 2000;
    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Message too long. Maximum ${MAX_MESSAGE_LENGTH} characters allowed.`,
      });
    }

    // Step 1: Regex Guardrail (fast check)
    const regexValidation = validateInput(trimmedMessage);
    if (!regexValidation.isValid) {
      const fallback = FALLBACK_RESPONSES[regexValidation.reason] || FALLBACK_RESPONSES.error;
      return sendFallbackSSE(res, fallback);
    }

    // Step 2: System Message & AI Validator
    const systemMessage = await createSystemMessage();
    const aiValidation = await validateWithFastModel(trimmedMessage);
    if (!aiValidation.isValid) {
      const fallback = FALLBACK_RESPONSES[aiValidation.reason] || FALLBACK_RESPONSES.off_topic;
      return sendFallbackSSE(res, fallback);
    }

    // Build message thread
    let messageList = [];
    if (Array.isArray(req.body?.messages) && req.body.messages.length > 1) {
      messageList = [
        systemMessage,
        ...req.body.messages.slice(-10),
      ];
    } else {
      messageList = [
        systemMessage,
        { role: "user", content: trimmedMessage },
      ];
    }

    // Step 3: Stream completion
    const abortController = new AbortController();
    req.on("close", () => abortController.abort());

    const { stream, provider } = await streamChatCompletion({
      messages: messageList,
      signal: abortController.signal,
    });

    console.log(`[Chat] Streaming response using ${provider}...`);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    let fullResponse = "";
    let isCompromised = false;
    let compromiseReason = "";

    for await (const chunk of stream) {
      if (chunk) {
        fullResponse += chunk;

        if (fullResponse.length % 200 < chunk.length) {
          const outputValidation = validateOutput(fullResponse, trimmedMessage);
          if (!outputValidation.isValid) {
            isCompromised = true;
            compromiseReason = outputValidation.reason;
            break;
          }

          const contentValidation = validateOutputContent(fullResponse);
          if (!contentValidation.isValid) {
            isCompromised = true;
            compromiseReason = contentValidation.reason;
            break;
          }
        }

        const processed = postProcessResponse(chunk);
        if (processed) {
          res.write(`data: ${JSON.stringify({ content: processed })}\n\n`);
        }
      }
    }

    if (isCompromised) {
      const fallbackMsg =
        FALLBACK_RESPONSES[compromiseReason] || FALLBACK_RESPONSES.response_compromised;
      res.write(`data: ${JSON.stringify({ content: "\n\n" + fallbackMsg })}\n\n`);
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("[Chat] Streaming error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || "Error processing your request" });
    } else {
      res.write(`data: ${JSON.stringify({ content: "\n[System error: " + error.message + "]" })}\n\n`);
      res.write("data: [DONE]\n\n");
      res.end();
    }
  }
}

// POST handler matching portfolv2 (/api/chat)
async function postChat(req, res) {
  try {
    const rawMessages = req.body?.messages;
    if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
      return res.status(400).json({ error: "Body must include a non-empty 'messages' array" });
    }

    const last = rawMessages[rawMessages.length - 1];
    if (!last || last.role !== "user" || !last.content) {
      return res.status(400).json({ error: "Last message must have role 'user' and content" });
    }

    const trimmed = last.content.trim();
    const regexValidation = validateInput(trimmed);
    if (!regexValidation.isValid) {
      const fallback = FALLBACK_RESPONSES[regexValidation.reason] || FALLBACK_RESPONSES.error;
      return res.send(fallback);
    }

    const systemMessage = await createSystemMessage();
    const formatted = [
      systemMessage,
      ...rawMessages.slice(-10),
    ];

    const abortController = new AbortController();
    req.on("close", () => abortController.abort());

    const { stream } = await streamChatCompletion({
      messages: formatted,
      signal: abortController.signal,
    });

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");

    for await (const chunk of stream) {
      if (chunk) {
        res.write(chunk);
      }
    }
    res.end();
  } catch (err) {
    console.error("[Chat] POST error:", err);
    res.status(500).json({ error: err.message || "Failed to process chat" });
  }
}

// Voice session placeholder
async function createVoiceSession(req, res) {
  try {
    const systemMessage = await createSystemMessage();
    const openaiKey = process.env.OPENAI_API_KEY;
    if (!openaiKey) {
      return res.status(501).json({ error: "Voice session requires OPENAI_API_KEY" });
    }

    const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openaiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-realtime-preview",
        voice: "alloy",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    res.json({
      ephemeralKey: data.client_secret.value,
      instructions: systemMessage.content,
    });
  } catch (error) {
    console.error("Error creating voice session:", error);
    res.status(500).json({ error: "Failed to create voice session", details: error.message });
  }
}

module.exports = { streamChat, postChat, createVoiceSession };
