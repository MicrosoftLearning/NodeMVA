var request = require("request");
var fs = require("fs");

//Example 1: Grab a Web Page and save it as a text file.
request("http://www.bing.com", function (error, response, body) { }).pipe(fs.createWriteStream("bing.txt"));


//Example 2: Simple download of a file without any callback.
/*
request("https://nodejs.org/static/apple-touch-icon.png").pipe(fs.createWriteStream("node.png"));
*/


//Example 3: Simple download of a file and get notified when done.
/*
var file = fs.createWriteStream("node.png");
request("https://nodejs.org/static/apple-touch-icon.png").pipe(file);
file.on('finish',function(){
    console.log("Done");
})
*/