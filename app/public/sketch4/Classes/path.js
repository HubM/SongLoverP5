function Path() {

   this.x1;
   this.y1;

   this.r;
   this.g;
   this.b;

   this.size = 100;

   this.move = function() {
      var level = amplitude.getLevel();
      var size = map(level,0,1,10,400);
      this.size = size;
   }

   this.display = function(elX,elY,bckR,bckG,bckB) {
      this.x1 = elX;
      this.y1 = elY;
      this.r = random(128,255);
      this.g = random(128,255);
      this.b = random(128,255);
      fill(this.r,this.g,this.b);
      noStroke();
      rect(this.x1,this.y1,this.size,this.size);
   }

}