var aws = require('aws-sdk');
aws.config.loadFromPath('./pathToJsonFile.json');

exports.scanArea = function (params, callback) {
    var docClient = new aws.DynamoDB.DocumentClient();
    var paramsFestival = {
        ProjectionExpression:"AreaName,Address,Descript",
        ScanIndexForward: false,
        FilterExpression: "contains(AreaName, :key) or contains(:key,AreaName) or contains(KeyWordsContains, :keyLowerCase) or contains(:keyLowerCase,KeyWordsContains)",
        ExpressionAttributeValues:{
            ":key":params,
            ":keyLowerCase": params.toLowerCase()
        },
        limit: 30,
        TableName: "Area"
    };
    docClient.scan(paramsFestival, function (err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            callback(null);
        } else {
            console.log("Query succeeded.");
            callback(data.Items);
        }
    });
};

exports.scanFestival = function (params, callback) {
    var docClient = new aws.DynamoDB.DocumentClient();
    var paramsFestival = {
        ProjectionExpression:"FestivalName,Timestmap,StartDate,EndDate,Address,Descript",
        ScanIndexForward: false,
        FilterExpression: "contains(FestivalName, :key) or contains(:key,FestivalName) or contains(KeyWordsContains, :keyLowerCase) or contains(:keyLowerCase,KeyWordsContains)",
        ExpressionAttributeValues:{
            ":key":params,
            ":keyLowerCase": params.toLowerCase()
        },
        limit: 50,
        TableName: "Festival"
    };

    
    docClient.scan(paramsFestival, function (err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            callback(null);
        } else {
            console.log("Query succeeded.");
            callback(data.Items);
        }
    });
};