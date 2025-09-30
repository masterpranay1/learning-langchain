import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

import { ChatGroq } from "@langchain/groq"

const groqModel = new ChatGroq({
  model: "openai/gpt-oss-20b",
  temperature: 0,
  apiKey: process.env.GROQ_API_KEY,
});

export const callGroqTest = async () => {
  console.time("groq");
  const res = await groqModel.invoke(
    "Explain the theory of relativity in simple terms in 50 words or less.",
  );
  console.log(res.content);
  console.timeEnd("groq");
};

export default groqModel;
