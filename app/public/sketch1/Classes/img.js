function Img() {
   this.img;

   this.display = function() {
      this.img = createImg(randomMusic.img);
      this.img.addClass('cover');
   }
   this.rotation = function(speed) {
         rotateValue+=speed;
         this.img.style("rotate", rotateValue);
   }
};
