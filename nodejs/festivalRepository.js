var aws = require("aws-sdk");
var bucket = require('./bucketResponsitory');
var db = require('./dbRepository');
var diacritics = require('diacritic');
aws.config.loadFromPath('./pathToJsonFile.json');

//add festival
/*
**** success****
* return 0
* ***Fail***
* create bucket fail reurn -1
* put item image title fail return -2
* add item festival to dynamodb fail return -3
* */
exports.addFestival = function (fields, imageTitle, images, callback) {
    //*************s3
    //Create bucket
    bucket.createBucket(fields.FestivalName, function (resultCreateBucket) {
        if (!resultCreateBucket) {
            callback(-1);
        }
        else {
            //put image title
            bucket.putItem(fields.FestivalName, imageTitle, function (imgTitle) {
                if (imgTitle == null) {
                    bucket.removeBucket(fields.FestivalName);
                    callback(-2);
                }
                else {
                    //put images
                    bucket.putItems(fields.FestivalName, images, function (imgs) {
                        //**********************end s3
                        //create festival model
                        var festivalModel = {
                            "FestivalName": fields.FestivalName,
                            "Timestmap": Date.parse(fields.StartDate),
                            "StartDate": fields.StartDate,
                            "EndDate": fields.EndDate,
                            "Address": fields.Address,
                            "Descript": fields.Descript,
                            "Content": fields.Content,
                            "ImageTitle": imgTitle,
                            "Images": imgs,
                            "KeyWordsContains": fields.FestivalName.toLowerCase() + " - " +
                            removeVNMark(fields.FestivalName.toLowerCase()) + " - " +
                            fields.Address.toLowerCase() + " - " +
                            removeVNMark(fields.Address.toLowerCase()) + " - " +
                            fields.StartDate + " - " +
                            fields.EndDate

                        };
                        //add data to dynamodb
                        var params = {
                            "TableName": "Festival",
                            "Item": festivalModel
                        };
                        var docClient = new aws.DynamoDB.DocumentClient();
                        docClient.put(params, function (err, data) {
                            if (err) {
                                console.error("Put festival fail, error: ", JSON.stringify(err, null, 2));
                                bucket.removeBucket(fields.FestivalName);
                                callback(-3);
                            } else {
                                console.log("Added festival");
                                callback(0);
                            }
                        });
                        //end add data to dynamodb
                    });
                }
            });
        }
    });
};
//end add festival
//remove festival
exports.deleteFestival = function (name, timestmap, callback) {
    var params = {
        Key: {
            "FestivalName": name,
            "Timestmap": parseInt(timestmap)
        },
        TableName: "Festival"
    };
    console.log("Attempting a conditional delete..." + name);
    var docClient = new aws.DynamoDB.DocumentClient();
    docClient.delete(params, function (err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            callback(-1);
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            callback(0);
        }
    });
};
//end remove festival
//scan
exports.getFestival = function (LastEvaluatedKey, callback) {
    var params = {
        AttributesToGet: [
            "FestivalName",
            "Timestmap",
            "StartDate",
            "EndDate",
            "Address",
            "Descript",
            "ImageTitle"
        ],
        Limit: 10,
        Select: "SPECIFIC_ATTRIBUTES",
        ScanIndexForward: false,
        TableName: "Festival"
    };
    if (LastEvaluatedKey != null) {
        params = {
            ExclusiveStartKey: {
                "FestivalName": LastEvaluatedKey.FestivalName,
                "Timestmap": parseInt(LastEvaluatedKey.Timestmap)
            },
            AttributesToGet: [
                "FestivalName",
                "Timestmap",
                "StartDate",
                "EndDate",
                "Address",
                "Descript",
                "ImageTitle"
            ],
            Limit: 10,
            Select: "SPECIFIC_ATTRIBUTES",
            ScanIndexForward: false,
            TableName: "Festival"
        };
    }
    var docClient = new aws.DynamoDB.DocumentClient();
    docClient.scan(params, function (err, data) {
        if (err) {
            console.error("Scan top new error: " + JSON.stringify(err, null, 2));
            callback(null);
        } else {
            console.log(data);
            callback(data);
        }
    });
};

exports.scanTopNew = function (callback) {
    var paramsFestival = {
        AttributesToGet: [
            "FestivalName",
            "Timestmap",
            "StartDate",
            "EndDate",
            "Address",
            "Descript",
            "ImageTitle"
        ],
        Limit: 8,
        Select: "SPECIFIC_ATTRIBUTES",
        ScanIndexForward: false,
        TableName: "Festival"
    };
    var docClient = new aws.DynamoDB.DocumentClient();
    docClient.scan(paramsFestival, function (err, data) {
        if (err) {
            console.error("Scan top new error: " + JSON.stringify(err, null, 2));
            callback(null);
        } else {
            callback(data.Items);
        }
    });
};
//end scan
//query
exports.queryFestival = function (name, timestmap, callback) {

    var params = {
        TableName: "Festival",
        KeyConditionExpression: "FestivalName = :name and Timestmap = :timestmap",
        ExpressionAttributeValues: {
            ":name": name,
            ":timestmap": parseInt(timestmap)
        },
        Limit: 1
    };
    var docClient = new aws.DynamoDB.DocumentClient();
    docClient.query(params, function (err, data) {
        if (err) {
            console.log(err);
            callback(null);
        }
        else {
            callback(data.Items[0]);
        }
    });
};
//end query
//remove VietNamese mark
function removeVNMark(str) {
    if (str.trim() != null || str.trim() != "") {
        var noneSign = diacritics.clean(str).trim();
        return noneSign;
    }
    return str;
}
