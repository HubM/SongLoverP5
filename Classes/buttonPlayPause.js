function buttonPlayPause() {
   this.button;

   this.display = function() {
      var c = color(randBackR,randBackG,randBackB);
      this.button = createButton('play');
      this.button.class('btn');
      this.button.position(w-150, 30);
      this.button.style('color',c);
    //   this.button.mouseClicked(togglePlay);
   }

   this.hide = function() {
	   this.button.hide();
   }

   this.show = function() {
	   this.button.show();
   }
}
