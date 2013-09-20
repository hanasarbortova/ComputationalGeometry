//var stepSimulator = require("./assignment1.js")

var canvas = document.createElement("canvas")
var context = canvas.getContext("2d")

var p1x = parseFloat(document.getElementById("p1x").value);
var p2x = parseFloat(document.getElementById("p2x").value);
var p1y = parseFloat(document.getElementById("p1y").value);
var p2y = parseFloat(document.getElementById("p2y").value);

var v1x = parseFloat(document.getElementById("v1x").value);
var v2x = parseFloat(document.getElementById("v2x").value);
var v1y = parseFloat(document.getElementById("v1y").value);
var v2y = parseFloat(document.getElementById("v2y").value);

var gnx = parseFloat(document.getElementById("gnx").value);
var gny = parseFloat(document.getElementById("gny").value);

var dt = parseFloat(document.getElementById("step").value);

var position = [[p1x, p1y],[p2x,p2y]]
var velocity = [[v1x, v1y],[v2x,v2y]]
var ground   = [gnx, gny]

document.write(position[0][0] +" " +position[0][1])

canvas.width = 400
canvas.height = 400
document.body.appendChild(canvas)

var context = canvas.getContext("2d")

var gn = gnx/gny;

function drawFrame() {

  context.fillStyle = "rgb(0, 0, 0)"
  context.fillRect(0, 0, 400, 400)
  
	context.beginPath();
	context.fillStyle = 'yellow'
	context.moveTo(100, 100);
	context.lineTo(300, 100);
	context.lineTo(300, gn*(100) + 200);
	context.lineTo(100, gn*(-100) + 200);	
	context.closePath();
	context.fill();
	
	//---------------------------------
	
	  for(var i = 0; i < position.length; i++){
	
	if(position[i][0] < -1){ // normal [1,0]
		velocity[i][0] = -velocity[i][0];
	}else if(position[i][0] > 1){ //normal [-1,0]
		velocity[i][0] = -velocity[i][0];
	}else if(position[i][1] > 1){ // normal [0,-1]
		velocity[i][1] = -velocity[i][1];
	}else if(ground[0]*position[i][0] + ground[1]*position[i][1] < 0){ // normal == ground
		var dot = ground[0]*velocity[i][0] + ground[1]*velocity[i][1];
		var dotN = ground[0]*ground[0] + ground[1]*ground[1];
		velocity[i][0] = velocity[i][0] - 2*dot*ground[0]/dotN;
		velocity[i][1] = velocity[i][1] - 2*dot*ground[1]/dotN;
	}
		position[i][0] += dt * velocity[i][0];
		position[i][1] += dt * velocity[i][1];
		

	}
	
	
	//---------------------------------
  
      context.beginPath();
      //context.arc(p1x, p1y, 5, 0, 2 * Math.PI, false);
	  context.arc(position[0][0]*(100) + 200, position[0][1]*(-100) + 200, 5, 0, 2 * Math.PI, false);
	  //context.arc(position[0][0], position[0][1], 5, 0, 2 * Math.PI, false);
	  
	  //document.write(position[0][0] +" " +position[0][1])
	  //document.write(position[0][0] + 10)
	  
      context.fillStyle = 'green';
      context.fill();
	  context.closePath();
	  
	  context.beginPath();
      //context.arc(p2x, p2y, 5, 0, 2 * Math.PI, false);
	  context.arc(position[1][0]*(100) + 200, position[1][1]*(-100) + 200, 5, 0, 2 * Math.PI, false);
	  //context.arc(position[1][0], position[1][1], 5, 0, 2 * Math.PI, false);
      context.fillStyle = 'red';
      context.fill();
	  context.closePath();
	  
	  //p1x++
	  //p1y++
	  
	  //p2x++
	  //p2y++


}
drawFrame()
var intervalId = setInterval(drawFrame,30);

function reset(){
p1x = parseFloat(document.getElementById("p1x").value);
p2x = parseFloat(document.getElementById("p2x").value);
p1y = parseFloat(document.getElementById("p1y").value);
p2y = parseFloat(document.getElementById("p2y").value);

v1x = parseFloat(document.getElementById("v1x").value);
v2x = parseFloat(document.getElementById("v2x").value);
v1y = parseFloat(document.getElementById("v1y").value);
v2y = parseFloat(document.getElementById("v2y").value);

gnx = parseFloat(document.getElementById("gnx").value);
gny = parseFloat(document.getElementById("gny").value);

dt = parseFloat(document.getElementById("step").value);

position = [[p1x, p1y],[p2x,p2y]]
velocity = [[v1x, v1y],[v2x,v2y]]
ground   = [gnx, gny]

gn = gnx/gny;
}


