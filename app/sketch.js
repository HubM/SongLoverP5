var randomMusic ;
var sound;
var w = window.innerWidth;
var h  = window.innerHeight;
var balls = [];
var randBackR = Math.floor(Math.random() * 255) + 128;
var randBackG = Math.floor(Math.random() * 255) + 128;
var randBackB = Math.floor(Math.random() * 255) + 128;
var sound;
var amplitude;
var canvas;
var rotateValue = 0;
var imgDefault;
var reverseButton;
var buttonPlayPause;
var songTitle;
var sliderSpeed;
var sliderVolume;

function preload(){
   loadJSON('songs.json', function(data){
	   randomMusic = data[Math.floor(Math.random() * data.length)];
	   console.log(randomMusic);
	   soundFormats('mp3', 'ogg');
	   sound = loadSound(randomMusic.song);
   });
}

function setup() {
   canvas = createCanvas(w,h);
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
