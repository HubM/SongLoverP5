function Img() {
  this.img;

  this.display = function() {
    this.img = createImg(randomMusic.img);
    this.img.addClass('cover');
  }
  this.rotation = function(speed, volume) {
    if(volume > 0) {
      rotateValue+=speed;
      this.img.style("rotate", rotateValue);
    }
  }
};