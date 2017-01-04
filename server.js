'use strict';

var express = require('express');
var moment = require('moment');
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

app.get('/:timestamp', function (req, res) {
	var inTime = req.params.timestamp;
	var date = null;
	
	if(isNaN(inTime)) {
		date = moment(inTime, 'MMMM DD, YYYY', true);
	}
	else {
		date = moment.unix(inTime);
	}
	
	if(!date.isValid()) {
		res.json({
			unix: null,
			natural: null
		});
	}
	else {
		res.json({
			unix: date.format('X'),
			natural: date.format('MMMM DD, YYYY')
		});
	}
	
});





