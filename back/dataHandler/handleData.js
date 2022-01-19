const AWS = require("aws-sdk");
const json = require("./dictionary.json");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });
const handleData = async () => {
  for (let i = 15664; i < json.length; i++) {
    const params = {
      TableName: "Dictionary",
      Item: json[i],
    };
    const ans = await ddb
      .put(params, (err, data) => (err ? err : data))
      .promise();
    console.log(ans);
  }
};
handleData();
