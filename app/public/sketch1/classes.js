function Ball() {
  this.x = random(0,w);
  this.y = 0;
  this.diameter = random(10, 30);
  this.r = random(128,255);
  this.g = random(128,255);
  this.b = random(128,255);
  this.framerate;

  this.move = function(element) {
	 this.framerate = element;
     frameRate(this.framerate*10);
     var level = amplitude.getLevel();
     var size = map(level, 0, 1, 0, 200);
     var finalSize = size*20;
     this.y = random(-finalSize,finalSize);
 }

  this.display = function() {
     fill(this.r,this.g,this.b);
     noStroke();
     ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};

function buttonPlayPause() {
   this.button;

   this.display = function() {
      var c = color(randBackR,randBackG,randBackB);
      this.button = createButton('pause');
      this.button.style('color',c);
      this.button.mouseClicked(togglePlay);
   }
}

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

		return this.speed;
	}
}

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

function title() {
   this.title;
   this.link;

   this.display = function() {
      this.title = createElement('h1',randomMusic.name);
      this.title.class('title');
      this.title.position(200,30);

      var c = color(randBackR,randBackG,randBackB);
      this.link = createA(randomMusic.link, 'website');
      this.link.class('link');
      this.link.position(200,110);
      this.link.style('color',c);
      this.link.attribute("target","_blank");
   }
}
