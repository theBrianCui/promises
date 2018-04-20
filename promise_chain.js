const fs = require("fs");
const Promise = require("bluebird");

// Promisify readFile
function readFilePromise(location) {
    return new Promise((resolve, reject) => {
        fs.readFile(location, "utf8", (err, text) => {
            if (err) reject(err);
            else resolve(text);
        });
    });
}

/* shortcut for creating a Promise that
resolves immediately */
var p = Promise.resolve(Math.random());

p.then((value) => {
    if (value > 0.5) {
        return readFilePromise("hello.txt")
            .then((text) => console.log(text))
            .then(() => "Read file!");
    } else {
        return "Didn't read file!";
    }

}).then((value) => {
    console.log(value);
});
