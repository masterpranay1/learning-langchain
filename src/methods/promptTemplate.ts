import { ChatPromptTemplate } from "@langchain/core/prompts";
import type { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { ChatGroq } from "@langchain/groq";

const systemTemplate = `Summarize the key points from the following text in 100 words.`;

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["user", "{text}"],
]);

export async function promptStream(model: ChatGoogleGenerativeAI | ChatGroq, message: string) {
  console.time("model-invocation");

  const prompt = await promptTemplate.format({ text: message });
  const stream = await model.stream(prompt);

  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
    process.stdout.write(String(chunk.content));
  }
  console.timeEnd("model-invocation");
  console.log("\n");
}