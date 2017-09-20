var songsArray = [
   {
      name: "Daft Punk - Harder better faster",
      img : "Images/daft.jpg",
      song: "Songs/daft.mp3",
      link: "https://www.youtube.com/channel/UCKHFvArwRwQU2VbRjMpaVGw",
   },
   {
      name: "Moderat - Eating Hooks",
      img : "Images/moderat.jpg",
      song: "Songs/moderat.mp3",
      link: "http://moderat.fm/",
   },
   {
      name: "Vitalic - Waiting for the stars",
      img : "Images/vitalic.jpg",
      song: "Songs/vitalic.mp3",
      link: "https://www.vitalic.org/",
   },
   {
      name: "Calvins Harris - Feels",
      img : "Images/feels.jpg",
      song: "Songs/feels.mp3",
      link: "http://new.calvinharris.com/",
   }
];

var randomMusic = songsArray[Math.floor(Math.random() * songsArray.length)];

function preload(){
   console.log(randomMusic.name);
   soundFormats('mp3', 'ogg');
   var songs = ["vitalic.mp3", "daft.mp3", "moderat.mp3"];
   var selectedSong = Math.floor(Math.random() *songs.length);
   sound = loadSound(randomMusic.song);
}

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

function setup() {
   canvas = createCanvas(w,h);
   amplitude = new p5.Amplitude();
   // sound.amp(0.4);
   sound.setVolume(0.5);
   sound.stop();

   for(var i=0; i<80; i++) {
      balls[i] = new Ball();
   }



	songTitle = new title();
	songTitle.display();

	// COVER IMAGE
	imgDefault = new Img();
	imgDefault.display();

	//REVERSE BUTTON
	reverseButton  = new buttonR();
	reverseButton.display();
	reverseButton.inverse();


	// PLAY  / PAUSE BUTTON
	buttonPlayPause = new buttonPlayPause();
	buttonPlayPause.display();

	sliderSpeed = new sliderSpeed();
	sliderSpeed.display();


}


function draw() {
// console.log(sound);
   background(randBackR,randBackG,randBackB);
   translate(0,h/2);
   for(var i=0; i< balls.length; i++) {
      balls[i].display();
      balls[i].move();
   }
   if(sound.isPlaying()) {
      imgDefault.rotation(10);
	  sliderSpeed.move();
  }
}


function togglePlay() {
   if(sound.isPlaying()) {
      sound.pause();
	  buttonPlayPause.button.elt.textContent = "play";
      imgDefault.rotation(0);
   } else {
      sound.loop();
	  buttonPlayPause.button.elt.textContent = "pause";
   }
}

function reverseMusic() {
		sound.pause();
		sound.reverseBuffer();
		sound.loop();
}
