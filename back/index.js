const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const { getByWord } = require("./controllers/getByWord");
const {
  getByWordAndSpeechType,
} = require("./controllers/getByWordAndSpeechType");

const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());

app.get("/:word", getByWord);
app.get("/:word/:partOfSpeech", getByWordAndSpeechType);

app.use(errorHandler);

module.exports.handler = serverless(app);
// const port = 4000;
// app.listen(port, () => {
//   console.log(`running on ${port}`);
// });
