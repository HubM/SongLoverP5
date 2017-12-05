var random = Math.floor(Math.random() * 4) + 1;

var classes = document.createElement('script');
classes.type = "text/javascript";
classes.defer = true;
classes.src =  "sketch" + random + "/classes.js";

var sketch = document.createElement('script');
sketch.type = "text/javascript";
sketch.defer = true;
sketch.src = "sketch" + random + "/sketch.js";

document.getElementsByTagName('head')[0].appendChild(classes);
document.getElementsByTagName('head')[0].appendChild(sketch);




