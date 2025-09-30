
import type { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { ChatGroq } from "@langchain/groq";

export async function mainStream(
  model: ChatGoogleGenerativeAI | ChatGroq,
  message: string
) {
  console.time("model-invocation");
  const stream = await model.stream(message);

  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
    console.log(chunk.content);
  }
  console.timeEnd("model-invocation");
  console.log("\n");
}