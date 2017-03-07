var express = require('express');
var app = express();
// var restRouter = require('./routes/rest');
var apiRouter = require('./routes/api');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');

app.longToShortHash = {};
app.shortToLongHash = {};

app.use('/api/v1', apiRouter);

// comma means shortUrl is a variable name
app.use('/:shortUrl', redirectRouter);

app.use('/', indexRouter);

app.listen(3000);