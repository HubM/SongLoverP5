function buttonR() {
   this.sound = sound;
   this.button;

   this.display = function() {
      var c = color(randBackR,randBackG,randBackB);
      this.button = createButton('normal');
      this.button.class('btn');
      this.button.position(w-150, 30);
      this.button.style('color',c);
   }

   this.inverse = function() {
	   this.button.mouseClicked(reverseMusic);
   }
};
