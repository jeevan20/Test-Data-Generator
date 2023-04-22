require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.api_key,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.send("HI");
});

app.get("/chatgpt", async (req, res) => {
  // const { prompt } = req.body;

  // const new_prompt = `generate 10 dataset in csv format for exactly for following the attributes: ${prompt}`;
  const newvar = '"Diseases","Symptoms","remedy"';
  const prompt = '"Name:string","Age:int","Sex:string"';
  const new_prompt = `generate 10 dataset in JSON format for following the attributes Without Duplicates and Repeatation: ${newvar} `;

  const answer = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: new_prompt,
    max_tokens: 3700,
    temperature: 0,
    top_p: 1,
  });
  console.log(answer.data.choices[0].text);
  console.log(typeof answer.data.choices[0].text);
  res.send(answer.data.choices[0].text);
});

app.post("/chatgpt", async (req, res) => {
  const { prompt, numRow } = req.body;
  const new_prompt = `generate ${numRow} dataset in JSON format for following the attributes Without Duplicates and Repeatation: ${prompt} `;
  const answer = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: new_prompt,
    max_tokens: 3700,
    temperature: 0,
    top_p: 1,
  });
  console.log(answer.data.choices[0].text);
  res.send(answer.data.choices[0].text);
});

app.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT} `);
});
