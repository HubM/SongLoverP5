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
	}

	this.display = function() {

		noFill();
		strokeWeight(this.size*10);
		stroke(this.r,this.g,this.b);
		line(this.x1,this.y1,this.x2,this.y2);
	}
}