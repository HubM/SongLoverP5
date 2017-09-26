function displayForm() {
   this.img;

   this.display = function() {
      this.img = createImg('../cross.svg');
      this.img.addClass('displayForm');
      this.img.mouseClicked(this.activeForm);
   }

   this.activeForm = function() {
      var form = document.getElementByClassName('uploadForm');
      console.log(form);
   }
}
