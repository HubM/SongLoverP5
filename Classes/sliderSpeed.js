function sliderSpeed() {
	this.slider;
	this.speed;
	this.display = function() {
		this.slider = createSlider(0.0,2.0,1.0,0.1);
		this.slider.position(30,200);
	}

	this.move = function() {
		this.speed = this.slider.value();
		sound.rate(this.speed);
	}
}
