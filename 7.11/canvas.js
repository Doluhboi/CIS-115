window.onload = function(){
	let canvas = document.querySelector("#myCanvas");
	let ctx = canvas.getContext("2d");
	//drawCar();
	loopCircle(80);
}

function drawCar(){
	ctx.beginPath();
	ctx.moveTo(100,200);
	ctx.lineTo(250,200);
	ctx.lineTo(250,190);
	ctx.lineTo(215,182);
	ctx.lineTo(195,165);
	ctx.lineTo(150,165);
	ctx.lineTo(100,200);
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	
	ctx.arc(140,200,12,0,Math.PI*2);
	ctx.arc(220,200,12,0,Math.PI*2);
	ctx.fillStyle = "black";
	ctx.fill();
}

function loopCircle(radius){
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext("2d");
	let x = radius;
	while(x-radius<canvas.width){
		ctx.beginPath()
		ctx.arc(x,canvas.height-radius,radius,0,Math.PI*2);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
		x+=radius*2;
	}
}