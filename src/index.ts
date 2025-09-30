import dotenv from "dotenv";
import path from "path";
import gemini from "./gemini";
import groq from "./groq";

import type { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { ChatGroq } from "@langchain/groq";

dotenv.config({ path: path.join(__dirname, "../.env") });

async function main(model: ChatGoogleGenerativeAI | ChatGroq, message: string) {
  console.time("model-invocation");
  const response = await model.invoke(input);
  console.timeEnd("model-invocation");
  console.log(response);
}

const input = `Summarize the key points from the following text: Navaratri[a] (Sanskrit: नवरात्रि, romanized: Navarātri) is an annual Hindu festival observed in honor of the goddess Durga, an aspect of Adi Parashakti, the supreme goddess. It spans over nine nights, first in the month of Chaitra (March/April of the Gregorian calendar), and again in the month of Ashvin (SeptemberOctober).[3][4] It is observed for different reasons and celebrated differently in various parts of the Hindu Indian cultural sphere.[3][5] Theoretically, there are four seasonal Navaratris. However, in practice, it is the post-monsoon autumn festival called Sharada Navaratri. There are 2 Gupta Navaratris or "Secret Navaratris" as well, one starting on the Shukla Paksha Pratipada of the Magha Month (Magha Gupta Navaratri) and another starting in the Shukla Paksha Pratipada of Ashadha Month.`;

main(gemini, input);
