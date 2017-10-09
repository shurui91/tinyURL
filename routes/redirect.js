var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');

router.get('*', function(req, res) {
	// slice(1) removes the starting slash
	var shortUrl = req.originalUrl.slice(1);
	var longUrl = urlService.getLongUrl(shortUrl, req.app.shortToLongHash);
	res.redirect(longUrl);
});

module.exports = router;
