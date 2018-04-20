const Promise = require("bluebird");
const request = require("request-promise");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function absoluteURL(url) {
    if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0)
        return url;
    else return "https://" + url;
};

function crawl(website, depth) {
    if (depth < 0) return;

    return request(website).then((body) => {
        console.log("Crawled " + website);

        var dom = new JSDOM(body);
        var anchors = dom.window.document.querySelectorAll("a");
        var urls = [];

        for (var i = 0; i < anchors.length; ++i) {
            var anchor = anchors[i];
            if (anchor.href)
                urls.push(crawl(absoluteURL(anchor.href), depth - 1));
        }

        return Promise.all(urls);
    }).catch((e) => {
        console.error("Something went wrong! " + e);
    })
}

crawl("https://stackoverflow.com/", 1);
