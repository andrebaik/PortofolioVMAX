import { SYSTEM_PROMPT } from "@/data/chatbotPrompt";

const GROQ_API_KEY =
  process.env.VUE_APP_GROQ_API_KEY ||
  process.env.GROQ_API_KEY ||
  "";
const GROQ_MODELS = [
  "openai/gpt-oss-120b",
  "qwen/qwen3.8-27b",
  "openai/gpt-oss-20b",
  "allam-2-7b",
];

async function* parseSseStream(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  try {
    let reading = true;
    while (reading) {
      const { done, value } = await reader.read();
      if (done) {
        reading = false;
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data:")) continue;

        const dataStr = trimmed.replace(/^data:\s*/, "");
        if (dataStr === "[DONE]") {
          return;
        }

        try {
          const json = JSON.parse(dataStr);
          const content =
            json.choices?.[0]?.delta?.content || json.content || "";
          if (content) {
            yield content;
          }
        } catch {
          // Ignore JSON parse errors for non-JSON lines
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

async function streamGroqDirect(prompt, onToken) {
  for (const model of GROQ_MODELS) {
    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: prompt },
            ],
            stream: true,
          }),
        }
      );

      if (!response.ok || !response.body) {
        continue;
      }

      let fullResponse = "";
      for await (const chunk of parseSseStream(response.body)) {
        if (chunk) {
          fullResponse += chunk;
          onToken(chunk);
        }
      }

      if (fullResponse.trim()) {
        return fullResponse;
      }
    } catch (err) {
      // Try next model if any
    }
  }

  throw new Error("Groq API streaming failed on all models.");
}

async function streamBackend(prompt, onToken) {
  const apiUrl = process.env.VUE_APP_API_URL || "";
  const endpoint = apiUrl ? `${apiUrl}/api/chat` : "/api/chat";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  if (!res.body) {
    const text = await res.text();
    onToken(text);
    return text;
  }

  let fullResponse = "";
  for await (const chunk of parseSseStream(res.body)) {
    if (chunk) {
      fullResponse += chunk;
      onToken(chunk);
    }
  }

  return fullResponse;
}

/**
 * Get streaming response from backend API with automatic direct Groq fallback
 * @param {string} prompt - User message
 * @param {function} onToken - Callback function that receives each token as it arrives
 * @returns {Promise<string>} - The complete response when done
 */
export const getStreamingResponse = async (prompt, onToken) => {
  // 1. Direct Groq API (fastest, requires zero backend services running)
  if (GROQ_API_KEY) {
    try {
      return await streamGroqDirect(prompt, onToken);
    } catch {
      // Fall through to backend if direct call fails
    }
  }

  // 2. Fallback to /api/chat or backend
  return await streamBackend(prompt, onToken);
};
