const express = require('express');
const bodyParser = require('body-parser');
// const formidable = require('formidable');
const fs = require('file-system');
const fileUpload = require('express-fileupload');
const app = express();


var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(fileUpload());

app.get('/', function (req,res) {
	res.sendFile(__dirname + '/index.html');
});


app.post('/', function(request, response){

		var filePath = __dirname + '/public/songs.json';

		var songName = request.body.songName;
		let songFile = request.files.songFile;
		let songCover = request.files.songCover;
		var artistWebsite = request.body.artistWebsite;

		var newSong = 	{	name: ""+songName+"", img:"Images/"+""+songCover.name+"", song:"Songs/"+""+songFile.name+"", link: ""+artistWebsite+""};


		console.log(songFile.name);

		songFile.mv('public/Songs/'+songFile.name, function(err){
			console.log(err);
		});

		songCover.mv('public/Images/'+songCover.name, function(err){
			console.log(err);
		});



	  var configFile = fs.readFileSync(filePath);
	  var config = JSON.parse(configFile);

	  config.push(newSong);
	  var configJSON = JSON.stringify(config);
	  fs.writeFileSync(filePath, configJSON);


});

app.listen(3000, function() {
	console.log('App listening on localhost 3000');
});
