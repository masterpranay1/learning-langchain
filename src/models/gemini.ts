import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

console.log(process.env.GOOGLE_GENAI_API_KEY);

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  temperature: 0,
  // apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

export const callGeminiTest = async () => {
  console.time("gemini");
  const res = await geminiModel.invoke(
    "Explain the theory of relativity in simple terms in 50 words or less.",
  );
  console.log(res.content);
  console.timeEnd("gemini");
};

export default geminiModel;
