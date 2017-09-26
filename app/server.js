const express = require('express');
const bodyParser = require('body-parser');
const app = express();


var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
	extended: true;
}));

app.use(bodyParser.json());

app.get('/', function (req,res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', function(request, response){
    console.log(request.body.songName);
    console.log(request.body.songFile);
	console.log(request.body.songCover);
	console.log(request.body.artistWebsite);
});


app.listen(3000, function() {
	console.log('App listening on localhost 3000');
});
