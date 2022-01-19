const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { getByWord } = require("./controllers/getByWord");
const {
  getByWordAndSpeechType,
} = require("./controllers/getByWordAndSpeechType");
const {
  getRandomWordBySpeechPart,
} = require("./controllers/getRandomWordBySpeechPat");
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.get("/:word", getByWord);
app.get("/:word/:partOfSpeech", getByWordAndSpeechType);
app.get("/part-of-speech/:part", getRandomWordBySpeechPart);

app.listen(port, () => {
  console.log(`running on ${port}`);
});
