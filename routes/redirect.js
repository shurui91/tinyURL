var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('*', function (req, res) {
	// slice(1) removes the starting slash
	var shortUrl = req.originalUrl.slice(1);
	var longUrl = "";
	res.redirect(longUrl);
});

module.exports = router;