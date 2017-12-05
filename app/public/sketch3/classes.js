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

function Lines() {

	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0;
	this.y2 = windowHeight;

	this.size = 5;

	this.r = 255;
	this.g = 255;
	this.b = 255;


	this.move = function(vitesse) {
		var level = amplitude.getLevel();


		frameRate(vitesse/2);
		var genR = map(level,0,1,128,255) + random(30,100);
		var genG = map(level,0,1,128,255) + random(30,100);
		var genB = map(level,0,1,128,255) + random(30,100);
		this.r = genR;
		this.g = genG;
		this.b = genB;
		
		
		frameRate(vitesse*10);
		push();	
			this.x1 = vitesse/10;
			this.x2 = vitesse/10;	
		pop();
		
		this.size = map(level, 0, 1, 0, windowWidth);
		// console.log(this.size*100);
		// pop();
	}

	this.display = function() {

		noFill();
		strokeWeight(this.size*10);
		stroke(this.r,this.g,this.b);
		line(this.x1,this.y1,this.x2,this.y2);
	}
}
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
