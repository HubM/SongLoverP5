// define song
var randomMusic ;
var sound;
var w = window.innerWidth;
var h  = window.innerHeight;
var balls = [];

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


function preload(){
   loadJSON('songs.json', function(data){
	   randomMusic = data[Math.floor(Math.random() * data.length)];
	   console.log(randomMusic);
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
	for(var i=0; i<80; i++) {
		balls[i] = new Ball();
	}

	buttonPlayPause = new buttonPlayPause();
	buttonPlayPause.display();

	songTitle = new title();
	songTitle.display();

	imgDefault = new Img();
	imgDefault.display();

	sliderSpeed = new sliderSpeed();
	sliderSpeed.display();

	sliderVolume = new sliderVolume();
	sliderVolume.display();

	displayForm = new displayForm();
	displayForm.display();
}


function draw() {
   background(randBackR,randBackG,randBackB);
   translate(0,h/2);
   if(sound.isPlaying()) {
	   sliderSpeed.move();
	   sliderVolume.move();
	   imgDefault.rotation(10*sliderSpeed.speed);
   }
   for(var i=0; i< balls.length; i++) {
      balls[i].display();
      balls[i].move(sliderSpeed.speed);
   }
}


function togglePlay() {
	if(sound.isPlaying()) {
		buttonPlayPause.button.elt.innerText = "play";
		sound.pause();
		imgDefault.rotation(0);
	} else {
		buttonPlayPause.button.elt.innerText = "pause";
		sound.loop();
	}
}
