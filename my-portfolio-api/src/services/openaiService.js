const OpenAI = require("openai");
const { createSystemMessage, streamChatCompletion, validateWithFastModel } = require("./aiService");

// Initialize OpenAI client if OPENAI_API_KEY is present
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY || "dummy-key",
  baseURL: process.env.GROQ_API_KEY ? "https://api.groq.com/openai/v1" : undefined,
});

module.exports = {
  openai,
  createSystemMessage,
  streamChatCompletion,
  validateWithFastModel,
};
