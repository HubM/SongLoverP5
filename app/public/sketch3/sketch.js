p5.disableFriendlyErrors = true;

// define song
var randomMusic ;
var sound;
var w = window.innerWidth;
var h  = window.innerHeight;

// define bck color
var randBackR = Math.floor(Math.random() * 255) + 200;
var randBackG = Math.floor(Math.random() * 255) + 200;
var randBackB = Math.floor(Math.random() * 255) + 200;

// song attributes
var amplitude;
var sliderVolume;
var songTitle;
var buttonPlayPause;
var sliderSpeed;
var rotateValue = 0;
var imgDefault;

// canvas and form
var canvas;
var displayForm;
var deg=0;


// element
var Line;

function preload(){
   loadJSON('songs.json', function(data){
	   randomMusic = data[Math.floor(Math.random() * data.length)];
	   soundFormats('mp3', 'ogg');
	   sound = loadSound(randomMusic.song);
   });
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	amplitude = new p5.Amplitude();
	sound.setVolume(0.4);
	sound.play();

	buttonPlayPause = new buttonPlayPause();
	buttonPlayPause.display();

	songTitle = new title();
	songTitle.display();

	if(randomMusic.img) {
		imgDefault = new Img();
		imgDefault.display();
	}

	sliderSpeed = new sliderSpeed();
	sliderSpeed.display();

	sliderVolume = new sliderVolume();
	sliderVolume.display();

	displayForm = new displayForm();
	displayForm.display();

	Line = new Lines();
}


function draw() {
   if(sound.isPlaying()) {
	   sliderSpeed.move();
	   sliderVolume.move();
	   if(randomMusic.img) {
		   imgDefault.rotation(15*sliderSpeed.speed, sliderVolume.volume);
	   }  
   }
   Line.display();
   Line.move(sliderSpeed.speed);
}


function togglePlay() {
	if(sound.isPlaying()) {
		buttonPlayPause.button.elt.innerText = "play";
    sound.pause();
    if(randomMusic.img) {
      imgDefault.rotation(0);
    }
	} else {
		buttonPlayPause.button.elt.innerText = "pause";
		sound.loop();
	}
}
