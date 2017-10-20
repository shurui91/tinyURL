var geoip = require('geoip-lite');
var RequestModel = require('../models/requestModel');

var logRequest = function(shortUrl, req) {
	var reqInfo = {};
	reqInfo.shortUrl = shortUrl;
	reqInfo.referer = req.headers.referer || 'Unknown';
	reqInfo.platform = req.useragent.platform || 'Unknown';
	reqInfo.browser = req.useragent.browser || 'Unknown';
	// ip address
	var ip =
		req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;

	// geo location
	var geo = geoip.lookup(ip);
	if (geo) {
		reqInfo.country = geo.country;
	} else {
		reqInfo.country = 'Unknown';
	}
	// timestamp
	reqInfo.timestamp = new Date();

	var request = new RequestModel(reqInfo);
	request.save();
};

module.exports = {
	logRequest: logRequest
};
