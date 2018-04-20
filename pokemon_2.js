const fs = require("fs");
const request = require("request-promise");

// Promisify readFile
function readFilePromise(location) {
    return new Promise((resolve, reject) => {
        fs.readFile(location, "utf8", (err, text) => {
            if (err) reject(err);
            else resolve(text);
        });
    });
}
readFilePromise("input_file_location.txt")

.then((filename) => 
    readFilePromise(filename.trim())

).then((content) => {
    content = content.split("\n")
        .map(url => url.trim())
        .filter(url => url !== "");
    
    all_requests = content.map((url) =>
        request(url).then((body) =>
            console.log(JSON.parse(body).name))
    );

    return Promise.all(all_requests);

}).then(() =>
    console.log("Done!")
).catch((e) =>
    console.log("Something went wrong: " + e)
);

console.log("Ready!");
