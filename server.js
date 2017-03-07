var express = require('express');
var app = express();
var apiRouter = require('./routes/api');
var redirectRouter = require('./routes/redirect');

app.get('/', function (req, res) {
	res.send("express server test");
});

app.use('/api/v1', apiRouter);

// comma means shortUrl is a variable name
app.use('/:shortUrl', redirectRouter);


app.listen(3000);