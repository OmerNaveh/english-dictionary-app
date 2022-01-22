const express = require("express");
// const serverless = require("aws-serverless-express");
const cors = require("cors");
const { getByWord } = require("./controllers/getByWord");
const {
  getByWordAndSpeechType,
} = require("./controllers/getByWordAndSpeechType");
// const {
//   getRandomWordBySpeechPart,
// } = require("./controllers/getRandomWordBySpeechPat");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());

app.get("/:word", getByWord);
app.get("/:word/:partOfSpeech", getByWordAndSpeechType);
// app.get("/part-of-speech/:part", getRandomWordBySpeechPart);

app.use(errorHandler);

// const server = serverless.createServer(app);
// module.exports.handler = (event, context) => {
//   serverless.proxy(server, event, context);
// };
const port = 4000;
app.listen(port, () => {
  console.log(`running on ${port}`);
});
