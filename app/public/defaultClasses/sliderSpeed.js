function sliderSpeed() {
	this.containerSlider;
	this.slider;
	this.titleSlider;
	this.speed;
	this.display = function() {
		var c = color(randBackR,randBackG,randBackB);
		this.containerSlider = createDiv('');
		this.containerSlider.addClass('container-slider');

		this.titleSlider = createElement('h2','speed');
		this.titleSlider.addClass('slider-title');
		this.titleSlider.style("color",c);
		this.titleSlider.parent(this.containerSlider);

		this.slider = createSlider(0.1,2.0,1.0,0.1);
		this.slider.addClass('slider');
		this.slider.addClass('s-speed');
		this.slider.parent(this.containerSlider);
	}

	this.move = function() {
		this.speed = this.slider.value();
		sound.rate(this.speed);

		// return this.speed;
	}
}
