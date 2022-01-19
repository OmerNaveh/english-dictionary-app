const AWS = require("aws-sdk");
const json = require("./dictionary.json");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });
const handleData = async () => {
  for (const def of json) {
    const params = {
      TableName: "Dictionary",
      Item: def,
    };
    const ans = await ddb
      .put(params, (err, data) => (err ? err : data))
      .promise();
    console.log(ans);
  }
};
handleData();
