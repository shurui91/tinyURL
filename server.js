var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send("express 1st time");
});

app.listen(3000);