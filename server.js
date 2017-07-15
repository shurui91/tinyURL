var express = require('express');
var app = express();
var apiRouter = require('./routes/api');
var redirectRouter = require('./routes/redirect');

app.longToShortHash = {};
app.shortToLongHash = {};

app.use('api/v1', restRouter);
app.use('/:shortUrl', redirectRouter);
app.listen(3000);