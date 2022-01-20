// GET /:word/:partOfSpeech - will return a word + definition + part of speech (noun, verb, adjectives, etc...)
const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });
const getByWordAndSpeechType = async (req, res, next) => {
  const { word, partOfSpeech } = req.params;
  if (!word || !partOfSpeech) return next("missing params");
  const params = {
    TableName: "Dictionary",
    KeyConditionExpression: "word = :word AND pos = :pos",
    ExpressionAttributeValues: {
      ":word": word.toUpperCase(),
      ":pos": partOfSpeech,
    },
  };
  const val = await ddb.query(params).promise();
  if (!val.Items) next("unrecognizable word");
  res.json(val.Items);
};

module.exports = { getByWordAndSpeechType };
