const fs = require("fs");
const request = require("request");

try {
    // read the location of the input file in input_file_location
    fs.readFile("input_file_location.txt", "utf8", function(err, text) {
        if (err) {
            throw err;
        }

        // read the file specified in input_file_location
        text = text.trim();
        console.log("Read input location file: " + text);
        fs.readFile(text, "utf8", function(err, text) {
            if (err) {
                throw err;
            }

            // argh nested callbacks
            console.log("Read input file, contains:");
            console.log(text);

            // get all the urls
            var urls = text.split("\n")
                .map((url) => url.trim())
                .filter((url) => url !== "");

            // make a request for each url
            for (let i = 0; i < urls.length; ++i) {
                request(urls[i], function(err, response, body) {
                    if (err) {
                        throw err;
                    }

                    console.log(JSON.parse(body).name);
                })
            }

            /* argh how do we run something 
               after all the requests finish */
            // console.log("Done!"); doesn't work!
        });
    });
} catch (e) {
    // argh I have to wrap this whole thing in a try catch block
    console.error("Something went wrong!" + e);
}

console.log("Ready!");
