const express = require("express");
const bodyParser = require("body-parser");
const fs = require("file-system");
const fileUpload = require("express-fileupload");
const favicon = require("serve-favicon");
const app = express();
const path = require("path");
const filePath = __dirname + "/public/songs.json";
const configFile = fs.readFileSync(filePath);
const config = JSON.parse(configFile);

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.png")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

app.get("/", (req,res) => res.sendFile(__dirname + "/index.html"));

app.post("/", function(req, res){

	let songName,
			songFile,
			songCover,
			artistName,
			artistWebsite;

	/* ===========
	  SONG TITLE
	============ */
	((req.body.songName.length >  0) ? songName = req.body.songName : songName = 'Empty title'); 

	/* ==============
	  SONG FILE & TYPE
	=============== */
	(((req.files.songFile != undefined) && (req.files.songFile.mimetype == "audio/mp3"  || req.files.songFile.mimetype == "audio/ogg" || req.files.songFile.mimetype == "audio/mpeg")) ? songFile = req.files.songFile : songFile = undefined);
	
	/* ===========
	  SONG PICTURE
	============ */
	(((req.files.songCover != undefined) && (req.files.songCover.mimetype == "image/jpeg"  || req.files.songCover.mimetype == "image/png")) ? songCover = req.files.songCover : songCover = undefined );

	/* =====
	  ARTIST
	====== */		
	((req.body.artistName.length >  0) ? artistName = req.body.artistName : artistName = "Empty artist");

	/* ===========
	  ARTIST WEBSITE
	============ */		
	((req.body.artistWebsite.length > 0) ? artistWebsite = req.body.artistWebsite : artistWebsite = "#");

	
	if(typeof songFile !== undefined && typeof songCover !== undefined) {

		/* =================================
			Create new JSON Object
			Move files to folders
		================================== */
		const newSong = 	{	
			name: ""+songName+"", 
			img:"Images/"+""+songCover.name+"", 
			song:"Songs/"+""+songFile.name+"", 
			link: ""+artistWebsite+""
		};

		songFile.mv(__dirname + "/public/Songs/"+songFile.name, (err) => { if(err) { console.log(err); } });
		songCover.mv(__dirname + "/public/Images/"+songCover.name, (err) => { if(err) { console.log(err); } });

		let valid,
				statut = 1,
				allValids = [];

		for(let song in config) {
			if(songName === config[song]["name"] || songFile === config[song]["song"] || songCover === config[song]["img"]) {
				valid = false;
				allValids.push(valid);
			} else {
				valid = true;
				allValids.push(valid);
			}
		}

		// comparer si son valid ou non
		allValids.every((element, index) => {
			if(element == false) {
				console.log("The song has already been uploaded");
				res.sendFile(__dirname + "/public/Views/error.html");
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
			res.sendFile(__dirname + "/public/Views/thanks.html");
		}
	} else {
		console.log("PLEASE USE COMMONS EXTENSIONS")
		// Si problème avec les champs du formulaire
		res.sendFile(__dirname + "/public/Views/error.html");
	}
});

app.listen(3000, function() {
	console.log("App listening on localhost:3000");
});
