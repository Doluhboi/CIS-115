let canvas;
let ctx;
let brushSize = 50;
let mouseIsDown = 0;



window.onload = () => {
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext("2d");

	canvas.addEventListener("mousemove",draw);
	canvas.addEventListener("mousedown",()=>{mouseIsDown=1;});
	canvas.addEventListener("mouseup",()=>{mouseIsDown=0;});
	
}

function draw(event){
	ctx.beginPath();
	ctx.fillStyle = "red";
	if(mouseIsDown == 1){
	ctx.arc(event.clientX-(brushSize/2),
		event.clientY-(brushSize/2),brushSize,0,Math.PI*2);
	ctx.fill();
		
	}
	ctx.closePath();
}