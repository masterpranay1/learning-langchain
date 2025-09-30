import type { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { ChatGroq } from "@langchain/groq";

export async function main(model: ChatGoogleGenerativeAI | ChatGroq, message: string) {
  console.time("model-invocation");
  const response = await model.invoke(message);
  console.timeEnd("model-invocation");
  console.log(response);
}
