var request = require('request');

module.exports = {
    shorten: function(url, cb) {
        request('http://is.gd/create.php?format=simple&url=' + encodeURIComponent(url), function (error, response, body) {
		cb(body.split("\n")[0]);
        });
    },
    custom: function(url, text, cb) {
	request('http://is.gd/create.php?format=simple&url=' + encodeURIComponent(url) + '&shorturl=' + encodeURIComponent(text), function (error, response, body) {
		cb(body.split("\n")[0]);
	});
    },
    lookup: function(url, cb) {
        request('http://is.gd/forward.php?format=simple&shorturl=' + encodeURIComponent(url), function (error, response, body) {
		cb(body.split("\n")[0]);
        });
    }
};
