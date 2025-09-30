import dotenv from "dotenv";
import path from "path";
import { callGeminiTest } from "./gemini";
import { callGroqTest } from "./groq";

dotenv.config({ path: path.join(__dirname, "../.env") });

callGeminiTest();
callGroqTest();
