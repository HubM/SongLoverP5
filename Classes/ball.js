// BALL CLASS
function Ball() {
  this.x = random(0,w);
  this.y = 0;
  this.diameter = random(10, 30);
  this.r = random(128,255);
  this.g = random(128,255);
  this.b = random(128,255);
  this.framerate;

  this.move = function(element) {
	 this.framerate = element;
	 console.log(this.framerate);
     frameRate(this.framerate*10);
     var level = amplitude.getLevel();
     var size = map(level, 0, 1, 0, 200);
     var finalSize = size*40;
     this.y = random(-finalSize,finalSize);
 }

  this.display = function() {
     fill(this.r,this.g,this.b);
     noStroke();
     ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
