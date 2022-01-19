// GET /:word  will return a word + definition + part of speech.
const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });
const getByWord = async (req, res, next) => {
  const { word } = req.params;
  if (!word) return next("missing params");
  const params = {
    TableName: "Dictionary",
    KeyConditionExpression: "word = :word",
    ExpressionAttributeValues: {
      ":word": word.toUpperCase(),
    },
  };
  const val = await ddb.query(params).promise();
  if (!val.Items) next("unrecognizable word");
  res.json(val.Items);
};

module.exports = { getByWord };
