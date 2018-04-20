const fs = require("fs");
const request = require("request");

var i_content_file = "";
var i_urls = [];

// read the location of the input file in input_file_location
fs.readFile("input_file_location.txt", "utf8", function(err, text) {
    if (err) throw err;

    // read the file specified in input_file_location
    i_content_file = text.trim();
});

// read each url
fs.readFile(i_content_file, "utf8", function(err, text) {
    if (err) throw err;

    // get all the urls
    i_urls = text.split("\n")
        .map((url) => url.trim())
        .filter((url) => url !== "");
});

// make a request for each url
for (let i = 0; i < i_urls.length; ++i) {
    request(urls[i], function(err, response, body) {
        if (err) throw err;
        console.log(JSON.parse(body).name);
    });
}

console.log("Ready!");
