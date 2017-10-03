function displayForm() {
   this.img;

   this.display = function() {
      this.img = createImg('../cross.svg');
      this.img.addClass('displayForm');
      this.img.mouseClicked(this.activeForm);
   }

   this.activeForm = function() {
    	var form = document.getElementById('uploadFormContainer');
		var img = document.getElementsByClassName('displayForm');

		// this.elt.className += "test";
		console.log(this.elt.classList['value'] && this.elt.classList['value'] != "displayForm");
		if(form.classList['value'] == "") {
			form.className += "showForm";
			this.addClass('rotate');
		} else {
			this.removeClass('rotate');
			form.classList.remove("showForm");
		}

   }

}
