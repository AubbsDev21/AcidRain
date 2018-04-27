
function Drop() {
	this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 4, 10);
this.fall = function() {
	//y is going to fall as fast as we set yspeed to be
   this.y = this.y + this.yspeed;

   //var grav = map(this.z, 0, 20, 0, 0.2);
   // this.yspeed = this.yspeed + grav;

   //this allows the rain drops to reset them self back up to the top
   if (this.y > height) {
   	this.y = random(-200, -100);

   }
this.show = function() {
	var thick = map(this.z, 0, 20, 1, 5);
	strokeWeight(thick);
    stroke(10, 255, 21);
	line(this.x, this.y, this.x, this.y+this.len);

}

}
}