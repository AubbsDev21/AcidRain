AcidRain
=========

An Acid Rain interact canvas design built with Javascript and used with p5.js library.

## Demo

![aicdrain](https://user-images.githubusercontent.com/16025198/39375541-b0fdc9c8-4a1c-11e8-86f8-162c613f45c5.gif)

## Code Examples
In Drop.js created a show variables that creates the line object and maps the thickness of the mulitple line.
~~~~bash
 this.show = function() {
	var thick = map(this.z, 0, 20, 1, 5);
	strokeWeight(thick);
   stroke(10, 255, 21);
	line(this.x, this.y, this.x, this.y+this.len);

}
~~~~



Randomly setting and mapping x, y, z,, Length and, fall speed.
~~~bash
	  this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 4, 10);
~~~

In the setup function creating the Canvas then creating multiple instances of that line object
~~~~bash
function setup(){
	createCanvas(600,600);
	
	for (var i = 0; i < 200; i++){
	 drops[i] = new Drop();
	}
	

}
~~~~

