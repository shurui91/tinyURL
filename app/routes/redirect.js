var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');
var path = require('path');

router.get('*', function(req, res) {
	// slice(1) removes the starting slash
	var shortUrl = req.originalUrl.slice(1);
	urlService.getLongUrl(shortUrl, function(url) {
		if (url) {
			res.redirect(url.longUrl);
		} else {
			res.sendFile(path.join(__dirname, '../public/views', '404.html'));
		}
	});
});

module.exports = router;
