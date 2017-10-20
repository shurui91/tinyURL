var logRequest = function(shortUrl, req) {
	var reqInfo = {};
	reqInfo.shortUrl = shortUrl;
	reqInfo.referer = req.headers.refere || 'Unknown';
	// reqInfo.platform =
};

module.exports = {
	logRequest: logRequest
};
