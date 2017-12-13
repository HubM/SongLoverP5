function Triangle() {
  this.x1 = random(0,100);
  this.y1 = 0;
  this.x2 = this.x1 + 5;
  this.y2 = this.y1 -15;
  this.x3 = this.x1 +10;
  this.y3 = this.y1;

  this.rotationDegree = int(random(1,6));

  this.randomW = random(1,3);

  this.r = random(128,255);
  this.g = random(128,255);
  this.b = random(128,255);
  this.framerate;

  this.move = function(element) {
	  this.framerate = element;
    frameRate(this.framerate*10);
    var level = amplitude.getLevel();
    var size = map(level, 0, 1, 0, 100);
    var weight = map(level, 0, 1, 1, 10);
    var finalSize = size*10;

    strokeWeight(weight);
    push();
     this.x1 = -finalSize;
     this.y2 = -finalSize;
     this.x3 = finalSize;
    pop();
 }

  this.display = function() {
     rotate(PI/this.rotationDegree);
     stroke(this.r,this.g,this.b);
     noFill();
     triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
};
