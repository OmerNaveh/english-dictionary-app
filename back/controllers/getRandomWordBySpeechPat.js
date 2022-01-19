const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });
const getRandomWordBySpeechPart = async (req, res, next) => {
  const { part } = req.params;
  let { letter } = req.query;
  if (!part) return next("missing params");
  if (!letter) {
    letter = "";
  }
  const params = {
    TableName: "Dictionary",
    KeyConditionExpression: "pos=:pos AND begins_with (word , :letter)",
    ExpressionAttributeValues: {
      ":letter": letter.toUpperCase(),
      ":pos": part,
    },
    Limit: 5,
  };
  const val = await ddb.query(params).promise();
  if (!val.Items) next("unrecognizable word");
  res.json(val.Items[randNum]);
};
const randNum = () => {
  return Math.ceil(Math.random() * 5);
};

// const check = async (pos, letter) => {
//   if (!letter) {
//     letter = "";
//   }
//   const params = {
//     TableName: "Dictionary",
//     KeyConditionExpression: "begins_with(word , :letter) AND pos=:pos",
//     ExpressionAttributeValues: {
//       ":letter": letter.toUpperCase(),
//       ":pos": pos,
//     },
//     Limit: 5,
//   };
//   const val = await ddb.query(params).promise();
//   if (!val.Items) next("unrecognizable word");
//   console.log(val.Items[randNum]);
// };
// check("n.", "v");
module.exports = { getRandomWordBySpeechPart };
