var aws = require("aws-sdk");
var bucket = require('./bucketResponsitory');
var db = require('./dbRepository');
var diacritics = require('diacritic');

aws.config.loadFromPath('./pathToJsonFile.json');

//query
exports.getArea = function (LastEvaluatedKey, callback) {
    var params = {
        TableName: "Area",
        Limit: 10
    };

    if (LastEvaluatedKey != null) {
        console.log("trong areareponse " + LastEvaluatedKey);
        params = {
            TableName: "Area",
            ExclusiveStartKey: {
                "AreaName": LastEvaluatedKey
            },
            Limit: 10
        };
    }
    var docClient = new aws.DynamoDB.DocumentClient();
    docClient.scan(params, function (err, data) {
        if (err) {
            console.error("Scan top new error: " + JSON.stringify(err, null, 2));
            callback(null);
        } else {
            callback(data);
        }
    });
};

exports.queryArea = function (name, callback) {

    var params = {
        TableName: "Area",
        KeyConditionExpression: "AreaName = :name",
        ExpressionAttributeValues: {
            ":name": name
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
//scan
exports.scanTopNew = function (callback) {
    var paramsFestival = {
        AttributesToGet: [
            "AreaName",
            "Address",
            "Descript",
            "ImageTitle"
        ],
        Limit: 8,
        Select: "SPECIFIC_ATTRIBUTES",
        ScanIndexForward: false,
        TableName: "Area"
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
//add area
/*
**** success****
* return 0
* ***Fail***
* create bucket fail reurn -1
* put item image title fail return -2
* add item area to dynamodb fail return -3
* */
exports.addArea = function (fields, imageTitle, images, callback) {
    //*************s3
    //Create bucket
    bucket.createBucket(fields.AreaName, function (resultCreateBucket) {
        if (!resultCreateBucket) {
            callback(-1);
        }
        else {
            //put image title
            bucket.putItem(fields.AreaName, imageTitle, function (imgTitle) {
                if (imgTitle == null) {
                    bucket.removeBucket(fields.AreaName);
                    callback(-2);
                }
                else {
                    //put images
                    bucket.putItems(fields.AreaName, images, function (imgs) {
                        //**********************end s3
                        //create festival model
                        var areaModel = {
                            "AreaName": fields.AreaName,
                            "Address": fields.Address,
                            "Descript": fields.Descript,
                            "Content": fields.Content,
                            "ImageTitle": imgTitle,
                            "Images": imgs,
                            "KeyWordsContains": fields.AreaName.toLowerCase() + " - " +
                            removeVNMark(fields.AreaName.toLowerCase()) + " - " +
                            fields.Address.toLowerCase() + " - " +
                            removeVNMark(fields.Address.toLowerCase())

                        };
                        //add data to dynamodb
                        var params = {
                            "TableName": "Area",
                            "Item": areaModel
                        };
                        var docClient = new aws.DynamoDB.DocumentClient();
                        docClient.put(params, function (err, data) {
                            if (err) {
                                console.error("Put area fail, error: ", JSON.stringify(err, null, 2));
                                bucket.removeBucket(fields.AreaName);
                                callback(-3);
                            } else {
                                console.log("Added area");
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
//end add area
//remove VietNamese mark
function removeVNMark(str) {
    if (str.trim() != null || str.trim() != "") {
        var noneSign = diacritics.clean(str).trim();
        return noneSign;
    }
    return str;
}
exports.deleteItem = function (_name, callback) {
    var params = {
        TableName: "Area",
        Key: {
            "AreaName": _name,
        },

    };
    console.log("Attempting a conditional delete..." + _name);
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
}
