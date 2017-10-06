var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var urlService = require('../services/urlService');

router.post('/urls', jsonParser, function(req, res) {
	var longUrl = req.body.longUrl;
	var shortUrl = urlService.getShortUrl(
		longUrl,
		req.app.longToShortHash,
		req.app.shortToLongHash
	);
	res.json({
		shortUrl: shortUrl,
		longUrl: longUrl
	});
});

router.get('/urls/:shortUrl', function(req, res) {
	var shortUrl = req.params.shortUrl;
	var longUrl = urlService.getLongUrl(shortUrl, req.app.shortToLongHash);
	if (longUrl) {
		res.json({
			shortUrl: shortUrl,
			longUrl: longUrl
		});
	} else {
		res.status(404).send('wrong information');
	}
});

module.exports = router;
