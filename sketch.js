//Color of rain: RGB(10, 255, 21);
//Background: RGB(0, 0, 0);

var drops = [];
var song;



function setup(){
	createCanvas(600,600);
	
	for (var i = 0; i < 200; i++){
	 drops[i] = new Drop();
	}
	

}

function draw(){
	background(0, 0, 0);
for(var i = 0; i< drops.length; i++){
	drops[i].fall();
    drops[i].show();

}
    
}