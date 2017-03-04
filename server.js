console.log("nodejs test");

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	if (req.url === '/') {
		res.writeHead(200, {"Content-Type" : "text-html"});
		var html = fs.readFileSync(__dirname + "/index.html");
		res.end("<html><head></head><body><h1>New Line</h1></body></html>");
	}
	if (req.url === '/api') {
		res.writeHead(200, {"Content-Type" : "application/json"});
		var obj = {
			name: 'Shurui Liu',
			age: 12
		};
		res.end(JSON.stringify(obj));
	}
}).listen(3000);

/*
http.createServer(function (req, res) {
	
}).listen(3000);
*/