function callNTimes(n, callback) {
    for (var i = 0; i < n; ++i)
        callback()
}

callNTimes(5, function() {
    console.log("Hey!");
});
