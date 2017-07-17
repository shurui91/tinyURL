var express = require('express');
var app = express();
var apiRouter = require('./routes/api');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var restRouter = require('./routes/redirect');

app.longToShortHash = {};
app.shortToLongHash = {};

app.use('/public', express.static(__dirname + "/public"));
app.use('api/v1', restRouter);
app.use('/', indexRouter);
app.use('/:shortUrl', redirectRouter);
app.listen(3000);