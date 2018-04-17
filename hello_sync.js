var fs = require("fs");

var file = fs.readFileSync("hello.txt", "utf8");
console.log(file);
console.log("Goodbye!");
