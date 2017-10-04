const express = require('express');
const bodyParser = require('body-parser');
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


app.post('/', function(req, res){

		var filePath = __dirname + '/public/songs.json';
		var configFile = fs.readFileSync(filePath);
		var config = JSON.parse(configFile);

		// give a title to the song
		if(req.files.songName == undefined) {
			var songName = req.files.songFile.name;
		} else {
			var songName = req.body.songName;
		}
		// verify if song has a file and the type
		if((req.files.songFile != undefined) && (req.files.songFile.mimetype == 'audio/mp3' || req.files.songFile.mimetype == 'audio/ogg')) {
			var songFile = req.files.songFile;
		} else {
			console.log("L'import n'a pas marché, le fichier audio n'est pas conforme");
		}

		// verify if the song has a picture and the type
		if((req.files.songCover != undefined) && (req.files.songCover.mimetype == 'image/jpeg' || req.files.songCover.mimetype == 'image/png')) {
			var songCover = req.files.songCover;
		}

		if(req.body.artistWebsite == '') {
			var artistWebsite = "/";
		} else {
			var artistWebsite = req.body.artistWebsite;
		}

		if(typeof songName !== 'undefined' && typeof songFile !== 'undefined' && typeof songCover !== 'undefined' 	&& artistWebsite !== '') {

			// create the new JSON Object
			var newSong = 	{	name: ""+songName+"", img:"Images/"+""+songCover.name+"", song:"Songs/"+""+songFile.name+"", link: ""+artistWebsite+""};

			songFile.mv('public/Songs/'+songFile.name, function(err){
				if(err) {
					console.log(err);
				}
			});

			songCover.mv('public/Images/'+songCover.name, function(err){
				if(err) {
					console.log(err);
				}
			});

			var valid;
			var statut = 1;
			var allValids = [];

			for(var song in config) {
				if(songName === config[song]['name'] || songFile === config[song]['song'] || songCover === config[song]['img']) {
					valid = false;
					allValids.push(valid);
				} else {
					valid = true;
					allValids.push(valid);
				}
			}

			// comparer si son valid ou non
			allValids.every(function(element, index){
				if(element == false) {
					console.log("The song has already been uploaded");
					res.sendFile(__dirname + '/public/Views/error.html');
					return statut = 0;
				} else {
					return true;
				}
			});

			// si tout ok, alors ecriture dans JSON
			// console.log("statut : " + statut);
			if( statut ==  1) {
				config.push(newSong);
				var configJSON = JSON.stringify(config);
				fs.writeFileSync(filePath, configJSON);
				res.sendFile(__dirname + '/public/Views/thanks.html');
			}
	} else {

		// Si problème avec les champs du formulaire
		res.sendFile(__dirname + '/public/Views/error.html');
	}
});

app.listen(3000, function() {
	console.log('App listening on localhost:3000');
});
