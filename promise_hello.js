const Promise = require("bluebird");
const fs = require("fs");

var p = new Promise((resolve, reject) => {
    fs.readFile("hello.txt", "utf8", (err, value) => resolve(value));
});

p.then((value) => {
    console.log(value);
});

p.then(() => console.log("lol"));

console.log("Goodbye!");
