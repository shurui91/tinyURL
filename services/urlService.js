var getShortUrl = function (longUrl, longToShortHash, shortToLongHash) {
	// 补全
	if (longUrl.indexOf('http') === -1) {
		longUrl = "http://" + longUrl;
	}
	// 若已经生成过shortUrl 就不再重复做一次
	if (longToShortHash[longUrl] != null) {
		return longToShortHash[longUrl];
	}
	else {
		var shortUrl = generateShortUrl(longToShortHash);
		longToShortHash[longUrl] = shortUrl;
		shortToLongHash[shortUrl] = longUrl;
		return shortUrl;
	}
};

var generateShortUrl = function (longToShortHash) {
	return Object.keys(longToShortHash).length;
};

var getLongUrl = function (shortUrl, shortToLongHash) {
	return shortToLongHash[shortUrl];
};

module.exports = {
	getShortUrl: getShortUrl,
	getLongUrl: getLongUrl
};