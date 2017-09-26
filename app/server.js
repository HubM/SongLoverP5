const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const fs = require('file-system');
const app = express();


var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function (req,res) {
	res.sendFile(__dirname + '/index.html');
});


app.post('/', function(request, response){
	var filePath = __dirname + '/public/songs.json';

	var songName = request.body.songName;
	var songFile = request.body.songFile;
	var songCover = request.body.songCover;
	var artistWebsite = request.body.artistWebsite;

	var newSong = 	{	name: ""+songName+"", img:"Images/"+""+songCover+"", song:"Songs/"+""+songFile+"", link: ""+artistWebsite+""};

	var form = new formidable.IncomingForm();

	form.parse(request);

 // form.on('fileBegin', function(name, file) {
 //
 // 	console.log(name);
 // 	console.log(file);
 // });
 //
 // form.on('file', function (name, file){
 //   console.log('Uploaded ' + file.name);
 // });




  var configFile = fs.readFileSync(filePath);
  var config = JSON.parse(configFile);

  config.push(newSong);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync(filePath, configJSON);

});

app.listen(3000, function() {
	console.log('App listening on localhost 3000');
});
