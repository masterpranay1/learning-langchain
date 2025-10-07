import { pipeline } from "@huggingface/transformers";
import vader from "vader-sentiment";

async function newFunction() {
  console.time("time taken - review sentiment");
  // Use a different model for sentiment-analysis
  const pipe = await pipeline(
    "sentiment-analysis",
    "Xenova/distilbert-base-uncased-finetuned-sst-2-english"
  );
  console.timeLog("time taken - review sentiment");

  // for (let i = 0; i < 50; i++) {
  //   const out2 = await pipe([
  //     `Very disappointing experience. Visited this hardware shop recently and had a really unpleasant experience. The staff was rude and unhelpful — they didn’t bother assisting me when I asked for a specific item, and acted like I was wasting their time. Definitely not shopping here again, and I wouldn’t recommend it to anyone who values good service and honesty.`,
  //     `Very arrogant person ….selling duplicate material …will show them the repercussions of fooling the customer for sure`,
  //   ]);
  // }
  const out = await pipe([
    `Very disappointing experience. Visited this hardware shop recently and had a really unpleasant experience. The staff was rude and unhelpful — they didn't bother assisting me when I asked for a specific item, and acted like I was wasting their time. Definitely not shopping here again, and I wouldn’t recommend it to anyone who values good service and honesty.`,
    `Very arrogant person ….selling duplicate material …will show them the repercussions of fooling the customer for sure`,
  ]);

  console.log(out[0].label);

  console.timeEnd("time taken - review sentiment");

  // console.time("time taken - vader sentiment");
  // const input =
  //   "order bahut deri se deliver karte hai (Translated by Google) The order is delivered very late";
  // const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
  // console.log(intensity);
  // console.timeEnd("time taken - vader sentiment");
}
// [{'label': 'POSITIVE', 'score': 0.999817686}]

// Allocate a pipeline for sentiment-analysis
newFunction();
