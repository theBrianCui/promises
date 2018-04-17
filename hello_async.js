var fs = require("fs");

fs.readFile("hello.txt", "utf8", function(err, text) {
    console.log(text);
});
console.log("Goodbye!");
