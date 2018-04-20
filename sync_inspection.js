const Promise = require("bluebird");

var rand = (new Promise((resolve, reject) => {
    resolve(Math.random());
}));

rand.then((value) => {
    console.log(value);
    return "World";

}).then((value) => {
    console.log(value);
    console.log(rand.value());

});
