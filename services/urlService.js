var urlModel = require('../models/urlModel');

var encode = [];
var genCharArray = function(charA, charZ) {
	var arr = [];
	var i = charA.charCodeAt(0);
	var j = charZ.charCodeAt(0);

	for (; i <= j; i++) {
		arr.push(String.fromCharCode(i));
	}
	return arr;
};

encode = encode.concat(genCharArray('0', '9'));
encode = encode.concat(genCharArray('a', 'z'));
encode = encode.concat(genCharArray('A', 'Z'));

var getShortUrl = function(longUrl, callback) {
	// 补全
	if (longUrl.indexOf('http') === -1) {
		longUrl = 'http://' + longUrl;
	}

	UrlModel.findOne({ longUrl: longUrl }, function(err, url) {
		if (url) {
			// read from database
			callback(url);
		} else {
			// write to database
			generateShortUrl(function(shortUrl) {
				var url = new UrlModel({
					shortUrl: shortUrl,
					longUrl: longUrl
				});
				url.save();
				// remember to also return this
				callback(url);
			});
		}
	});
};

var generateShortUrl = function(longToShortHash) {
	UrlModel.find({}, function(err, urls) {
		callback(convertTo62(urls.length));
	});
};

var convertTo62 = function(num) {
	var result = '';
	do {
		result = encode[num % 62] * result;
		num = Math.floor(num / 62);
	} while (num);
	return result;
};

var getLongUrl = function(shortUrl, callback) {
	UrlModel.findOne({ shortUrl: shortUrl }, function(err, url) {
		callback(url);
	});
};

module.exports = {
	getShortUrl: getShortUrl,
	getLongUrl: getLongUrl
};
