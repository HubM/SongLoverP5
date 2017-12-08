function sliderVolume() {
	this.titleSlider;
	this.slider;
	this.volume;

	this.display = function() {
		var c = color(randBackR,randBackG,randBackB);

		this.titleSlider = createElement('h2','volume');
		this.titleSlider.addClass('slider-title');
		this.titleSlider.style("color",c);
		this.titleSlider.parent(sliderSpeed.containerSlider);

		this.slider = createSlider(0.0,1.0,0.5,0.1);
		this.slider.addClass('slider');
		this.slider.parent(sliderSpeed.containerSlider);
	}

	this.move = function() {
		this.volume = this.slider.value();
		sound.setVolume(this.volume);
	}
}
