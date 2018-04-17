var fs = require("fs");

fs.readFile("hello.txt", "utf8", function(err, text) {
    console.log(1);
    console.log(text);
});

fs.readFile("hello.txt", "utf8", function(err, text) {
    console.log(2);
    console.log(text);
});

fs.readFile("hello.txt", "utf8", function(err, text) {
    console.log(3);
    console.log(text);
});

fs.readFile("hello.txt", "utf8", function(err, text) {
    console.log(4);
    console.log(text);
});

fs.readFile("hello.txt", "utf8", function(err, text) {
    console.log(5);
    console.log(text);
});

console.log("Goodbye!");
