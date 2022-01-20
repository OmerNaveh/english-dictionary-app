const AWS = require("aws-sdk");
const json = require("./dictionary.json");
const currentTable = require("./currentTable.json");
const fs = require("fs");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });

const tableData = async () => {
  let dataArr = [];
  let data = await ddb.scan({ TableName: "Dictionary" }).promise();
  dataArr = dataArr.concat(data.Items);
  while (dataArr.length < 107793) {
    const tryagain = async () => {
      console.log(dataArr.length);
      data = await ddb
        .scan({
          TableName: "Dictionary",
          ExclusiveStartKey: data.LastEvaluatedKey,
        })
        .promise();
      dataArr = dataArr.concat(data.Items);
    };
    await tryagain();
  }
  fs.writeFileSync("currentTable.json", JSON.stringify(dataArr));
};
const createCompareTable = () => {
  const compared = json.filter(
    (item) =>
      !currentTable.find(
        (currentItem) =>
          item.word === currentItem.word &&
          item.pos === currentItem.pos &&
          item.definitions[0] === currentItem.definitions[0]
      )
  );
  fs.writeFileSync("comparedToEnter.json", JSON.stringify(compared));
};
createCompareTable();
