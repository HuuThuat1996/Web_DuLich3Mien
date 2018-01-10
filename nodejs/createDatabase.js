var aws = require("aws-sdk");
var db = require("./dbRepository");

var dynamodb = new aws.DynamoDB();

var FestivalTable = {
    TableName: "Festival",
    KeySchema: [
        { AttributeName: "FestivalName", KeyType: "HASH" },
        { AttributeName: "Timestmap", KeyType: "RANGE" }

    ],
    AttributeDefinitions: [
        { AttributeName: 'FestivalName', AttributeType: "S" },
        { AttributeName: "Timestmap", AttributeType: "N" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

var AreaTable = {
    TableName: "Area",
    KeySchema: [
        { AttributeName: "AreaName", KeyType: "HASH" }
    ],
    AttributeDefinitions: [
        { AttributeName: "AreaName", AttributeType: "S" }

    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

var AdminTable = {
    TableName: "Admin",
    KeySchema: [
        { AttributeName: "UserName", KeyType: "HASH" }
    ],
    AttributeDefinitions: [
        { AttributeName: "UserName", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

db.createTable(FestivalTable);
//db.createTable(AreaTable);
//db.createTable(AdminTable);