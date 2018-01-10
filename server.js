var http = require('http');
var fs = require('fs');
var url = require('url');
var festivalRepository = require('./nodejs/festivalRepository');
var areaRepository = require('./nodejs/areaRepository');
var uploadFile = require('./nodejs/uploadFile');
var search = require('./nodejs/search');
var bucket = require('./nodejs/bucketResponsitory');
var searchFestival = require('./nodejs/searchFestival');
var searchArea = require('./nodejs/searchArea');
var searchAll = require('./nodejs/searchAll');
var infomation = require('./nodejs/info');
//common
/*mimeType
**************************************/
var mimeType = {
    html: "text/html",
    ico: "image/x-icon",
    jpg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    css: "text/css",
    js: "text/javascript",
    json: "application/json",
    wav: "audio/wav",
    svg: "image/svg+xml",
    woff2: "application/font-woff2"
};
/*path
**************************************/
var path = {
    html: "./htmls",
    public: "./public"
};
//end common

http.createServer(function (request, response) {

    //analysis request
    const URL = url.parse(request.url);
    console.log(request.url);

    if (request.method == "GET") {
        switch (URL.pathname.toLowerCase()) {
            case "/":
            case "/trangchu":
                fs.readFile(path.html + "/index.html", function (err, data) {
                    if (err) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        response.end(data);
                    }
                });
                break;
            case "/lehoi": {
                fs.readFile(path.html + "/festival.html", function (err, data) {
                    if (err) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        response.end(data);
                    }
                });
                break;
            }
            case "/diadiem": {
                fs.readFile(path.html + "/area.html", function (err, data) {
                    if (err) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        response.end(data);
                    }
                });
                break;
            }
            case "/lehoi/thongtin":
                var info = url.parse(request.url, true).query;
                festivalRepository.queryFestival(info.name, info.timestmap, function (dataFestival) {
                    if (dataFestival == null) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        var html = infomation.InfoFestival(dataFestival);
                        response.end(html);

                        //-----
                    }
                });

                break;
            case "/diadiem/thongtin":
                var info = url.parse(request.url, true).query;
                areaRepository.queryArea(info.name, function (dataArea) {
                    if (dataArea == null) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        var html = infomation.InfoArea(dataArea);
                        response.end(html);

                        //-----
                    }
                });

                break;
            case "/searchfestivalnew": {
                festivalRepository.scanTopNew(function (data) {
                    if (data == null) {
                        response.writeHead(404, { 'content-type': 'text/plain' });
                        response.end();
                    }
                    else {
                        var _data = JSON.stringify(data, null, 2);
                        response.writeHead(200, { 'content-type': mimeType.json });
                        response.end(_data);
                    }
                });
                break;
            }
            case "/getfestival": {
                var lastEvaluatedKey;
                festivalRepository.getFestival(lastEvaluatedKey, function (data) {
                    if (data == null) {
                        response.writeHead(404, { 'content-type': 'text/plain' });
                        response.end();
                    }
                    else {
                        var _data = JSON.stringify(data, null, 2);
                        response.writeHead(200, { 'content-type': mimeType.json });
                        response.end(_data);
                    }
                });
                break;
            }
            case "/getarea": {
                var lastEvaluatedKey;
                areaRepository.getArea(lastEvaluatedKey, function (data) {
                    if (data == null) {
                        response.writeHead(404, { 'content-type': 'text/plain' });
                        response.end();
                    }
                    else {
                        var _data = JSON.stringify(data, null, 2);
                        response.writeHead(200, { 'content-type': mimeType.json });
                        response.end(_data);
                    }
                });
                break;
            }
            case "/getarea/next": {
                var q = url.parse(request.url, true).query;
                var lastEvaluatedKey = q.areaname;
                areaRepository.getArea(lastEvaluatedKey, function (data) {
                    if (data == null) {
                        response.writeHead(404, { 'content-type': 'text/plain' });
                        response.end();
                    }
                    else {
                        var _data = JSON.stringify(data, null, 2);
                        response.writeHead(200, { 'content-type': mimeType.json });
                        response.end(_data);
                    }
                });
                break;
            }
            case "/getfestival/next": {
                var q = url.parse(request.url, true).query;
                var lastEvaluatedKey = {};

                lastEvaluatedKey.FestivalName = q.festivalname.substring(0, q.festivalname.lastIndexOf(','));
                lastEvaluatedKey.Timestmap = q.festivalname.substring(q.festivalname.lastIndexOf(',') + 1, q.festivalname.length);
                festivalRepository.getFestival(lastEvaluatedKey, function (data) {
                    if (data == null) {
                        response.writeHead(404, { 'content-type': 'text/plain' });
                        response.end();
                    }
                    else {
                        var _data = JSON.stringify(data, null, 2);
                        response.writeHead(200, { 'content-type': mimeType.json });
                        response.end(_data);
                    }
                });
                break;
            }
            case "/searchareanew": {
                areaRepository.scanTopNew(function (data) {
                    if (data == null) {
                        response.writeHead(404, { 'content-type': 'text/plain' });
                        response.end();
                    }
                    else {
                        var _data = JSON.stringify(data, null, 2);
                        response.writeHead(200, { 'content-type': mimeType.json });
                        response.end(_data);
                    }
                });
                break;
            }
            case "/search": {
                var info = url.parse(request.url, true).query;
                search.scanArea(info.infoSearch, function (dataArea) {
                    search.scanFestival(info.infoSearch, function (data) {
                        var html = searchAll.SearchAll(dataArea, data);
                        response.end(html);
                    });
                });
                break
            }
            case "/festival/search": {
                var info = url.parse(request.url, true).query;
            
                search.scanFestival(info.infoSearch, function (data) {
                    var html = searchFestival.ResultOfSearchFestival(data);
                    response.end(html);
                })
                break;
            }
            case "/area/search": {
                console.log("có đây");
                var info = url.parse(request.url, true).query;

                console.log("parameter " + info.infoSearch);
                search.scanArea(info.infoSearch, function (dataArea) {

                    var html = searchArea.ResultOfSearchArea(dataArea);

                    response.end(html);
                })
                break;
            }

            case "/quanly/xoalehoi": {
                fs.readFile(path.html + "/deleteFestival.html", function (err, data) {
                    if (err) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        response.end(data);
                    }
                });
                break;
            }
            case "/quanly/xoadiadanh": {
                fs.readFile(path.html + "/deleteArea.html", function (err, data) {
                    if (err) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        response.end(data);
                    }
                });
                break;
            }
            case "/quanly/themlehoi":
                fs.readFile(path.html + "/addFestival.html", function (err, data) {
                    if (err) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        response.end(data);
                    }
                });
                break;
            case "/quanly/themdiadanh":
                fs.readFile(path.html + "/addArea.html", function (err, data) {
                    if (err) {
                        response.writeHead(404, "Not found");
                        response.end();
                    }
                    else {
                        response.writeHead(200, { 'content-type': mimeType.html });
                        response.end(data);
                    }
                });
                break;
            default: {
                var lastIndexOfDot = -1;
                try {
                    lastIndexOfDot = URL.pathname.lastIndexOf('.');
                }
                catch (exception) {
                    lastIndexOfDot = -1;
                }
                //compare file type for read file and return context-type in response writeHead
                if (lastIndexOfDot > 0) {
                    try {
                        var typeFile = URL.pathname.substr(lastIndexOfDot);
                        if (typeFile != null) {
                            for (var x in mimeType) {
                                if ("." + x == typeFile) {
                                    fs.readFile(path.public + URL.pathname, function (err, data) {
                                        if (err) {
                                            response.writeHead(404, "Not found");
                                            response.end();
                                        }
                                        else {
                                            response.writeHead(200, { 'content-type': mimeType[x] });
                                            response.writeHead(200, { 'content-type': mimeType[x] });
                                            response.end(data);
                                        }
                                    });
                                    break;
                                }
                            }
                        }
                    }
                    catch (exception) {
                        response.writeHead(404, "Not found");
                    }
                }
                else {
                    response.writeHead(404, "Not found");
                    response.end();
                }
            }
        }
    }
    else if (request.method.toString() == "POST") {
        switch (URL.pathname.toLowerCase()) {
            case "/themlehoi": {
                try {
                    uploadFile.uploadFiles(request, function (err, fields, files) {
                        if (err) {
                            response.writeHead(500, { 'content-type': 'text/plain' });
                            response.end("Fail");
                        }
                        else {
                            festivalRepository.addFestival(fields, files.ImageTitle, files.Image, function (result) {
                                if (result != 0) {
                                    response.writeHead(500, { 'content-type': 'text/plain' });
                                    response.end("Add festival fail.");
                                }
                                else {
                                    response.writeHead(200, { 'content-type': 'text/plain' });
                                    response.end("Add festival success.");
                                }
                            });
                        }
                    });
                }
                catch (exception) {
                    console.log("->Exception");
                    response.writeHead();
                    response.end();
                }
                break;
            }
            case "/themdiadanh": {
                try {
                    uploadFile.uploadFiles(request, function (err, fields, files) {
                        if (err) {
                            response.writeHead(500, { 'content-type': 'text/plain' });
                            response.end("Fail");
                        }
                        else {
                            areaRepository.addArea(fields, files.ImageTitle, files.Images, function (result) {
                                if (result != 0) {
                                    response.writeHead(500, { 'content-type': 'text/plain' });
                                    response.end("Add area fail.");
                                }
                                else {
                                    response.writeHead(200, { 'content-type': 'text/plain' });
                                    response.end("Add area success.");
                                }
                            });
                        }
                    });
                }
                catch (exception) {
                    console.log("->Exception");
                    response.writeHead();
                    response.end();
                }
                break;
            }
            case "/xoadiadanh/areaname": {
                try {
                    var info = url.parse(request.url, true).query;
                    console.log("nó có chạy vô đây nhé " + info.areaname);
                    areaRepository.deleteItem(info.areaname, function (result) {
                        if (result != 0) {
                            response.writeHead(500, { 'content-type': 'text/html' });
                            response.end("Delete fail");
                        }
                        else {
                            bucket.removeBucket(info.areaname);
                            response.writeHead(200, { 'content-type': mimeType.html });
                            response.end("Delete success");
                        }

                    })

                }
                catch (exception) {
                    console.log("->Exception");
                    response.writeHead();
                    response.end();
                }
                break;
            }
            case "/xoalehoi": {
                try {
                    var info = url.parse(request.url, true).query;
                    console.log("Ten le Hoi " + info.festivalname + " Timesmap " + info.timestmap);
                    festivalRepository.deleteFestival(info.festivalname, info.timestmap, function (result) {
                        if (result != 0) {
                            response.writeHead(500, { 'content-type': 'text/html' });
                            response.end("Delete fail");
                        }
                        else {
                            console.log("bucket Name " + info.festivalname);
                            bucket.removeBucket(info.festivalname);
                            response.writeHead(200, { 'content-type': mimeType.html });
                            response.end("Delete success");
                        }

                    })

                }
                catch (exception) {
                    console.log("->Exception");
                    response.writeHead();
                    response.end();
                }
                break;
            }
            default:
                break;
        }
    }

}).listen(8084);
console.log("Server running at http://loaclhost:8084");
// request.on('data', function (chunk) {
//      var urlFull = request.url + "?" + chunk;
//     var model = url.parse(urlFull, true).query;
//     console.log(model.name);
//     });
