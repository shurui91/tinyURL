var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
	// res.sendFile('/home/aaron/Desktop/github/tinyURL/public/views/index.html');
	res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
});

module.exports = router;
