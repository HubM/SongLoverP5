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


// el 
var texture;
var z = 30;
var x = 10;
var r = 0;
var frames;
var tubeSize;
var rotationSpeed;
var level;
var size;


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
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	

	amplitude = new p5.Amplitude(0.999);
	sound.setVolume(0.4);
	sound.play();

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

	img = loadImage(randomMusic.img);
}


function draw() {
	background(randBackR,randBackG,randBackB);

	level = amplitude.getLevel();
	size = map(level, 0, 1, 100, 400);

  if(sound.isPlaying()) {
	  sliderSpeed.move();
	  sliderVolume.move();
	  imgDefault.rotation(10*sliderSpeed.speed);

	  rotationSpeed = map(sliderSpeed.speed,0,2,0,0.07);
   	tubeSize = map(sliderSpeed.speed,0,2,20,60);

   	camera(30,30,-20,-20,100,0,100,1,1);
   	rotateY(r+=rotationSpeed);
   	rotateX(r+=rotationSpeed);
  } else {
   	orbitControl();	
  }

   	cone(10, 40);
   	texture(img);
	  push();
	  	frameRate()
			torus(size, tubeSize);	   	
	  pop();
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
