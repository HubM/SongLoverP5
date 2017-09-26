const express = require('express');
const app = express();
var path = require('path');

//
// app.use(express.static(__dirname + '/Classes'));
// app.use(express.static(__dirname + '/Songs'));
// app.use(express.static(__dirname + '/Images'));
// app.use(express.static(__dirname + '/sketch.css'));
// app.use(express.static(__dirname + '/sketch.js'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req,res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
	console.log('App listening on localhost 3000');
});
