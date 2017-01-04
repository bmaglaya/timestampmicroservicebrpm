var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log('App now running on port: ', port );
});

/*
 *	Timestamp Microservice API Routes
 *
 *	GET ('/') displays index page.
 *	GET ('/:timestamp') takes time stamp and returns
 * 		{ "unix": unixTimeStamp, "natural": "Month Day, Year" }
 *		or returns null for both with an invalid time stamp.
 *
 */
 
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});