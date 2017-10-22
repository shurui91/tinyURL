var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var indexRouter = require('./routes/index');
var redirectRouter = require('./routes/redirect');
var mongoose = require('mongoose');
var useragent = require('express-useragent');

mongoose.connect('mongodb://user:user@ds125060.mlab.com:25060/tinyurl');

// app.longToShortHash = {};
// app.shortToLongHash = {};

app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/public', express.static(__dirname + '/public'));

app.use(useragent.express());

// deal with all the links should be sent to the backend
app.use('/api/v1', restRouter);

app.use('/', indexRouter);

// column means whatever comes after is a variable
app.use('/:shortUrl', redirectRouter);

app.listen(3000);
