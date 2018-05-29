var random = Math.floor(Math.random() * 5) + 1;

var allDefaultClasses = document.createElement('script');
allDefaultClasses.type = "text/javascript";
allDefaultClasses.defer = true;
allDefaultClasses.src = "allDefaultClasses.js";
document.getElementsByTagName('head')[0].appendChild(allDefaultClasses);

if(random !== 5 && random !== 6) {
	var classes = document.createElement('script');
	classes.type = "text/javascript";
	classes.defer = true;
	classes.src =  "sketch" + random + "/classes.js";
	document.getElementsByTagName('head')[0].appendChild(classes);
}

var sketch = document.createElement('script');
sketch.type = "text/javascript";
sketch.defer = true;
sketch.src = "sketch" + random + "/sketch.js";
document.getElementsByTagName('head')[0].appendChild(sketch);




