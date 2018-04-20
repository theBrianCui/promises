const Promise = require("bluebird");

var hello = new Promise(function(resolve, reject) {
    console.log("Hello, World!");
    setTimeout(resolve, 500);

}).then(() => {
    console.log("Hello, Promise!");
}).then(() => {

    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 500);
    });
})

console.log("Goodbye!");
