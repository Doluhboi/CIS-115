let canvas;
let ctx;
let frame = {
	W:0,
	H:0,
	X:0,
	Y:0,
	speed:5,
	currentFrame:0,
	direction:0
};

window.onload = () => {
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext("2d");
	//setInterval(draw, 100);
	window.addEventListener("keydown", draw);
	
}

function draw(event){
	let img = new Image();
	img.onload = ()=>{
		ctx.clearRect(0,0,canvas.width,canvas.height);
		frame.W = img.width/4;
		frame.H = img.height/4;

		//left
		if(event.keyCode == 37){
			frame.direction = 1;
			frame.X-=frame.speed;
		}
		//up
		if(event.keyCode == 38){
			frame.direction = 3;
			frame.Y-=frame.speed;
		}
		//right
		if(event.keyCode == 39){
			frame.direction = 2;
			frame.X+=frame.speed;
		}
		//down
		if(event.keyCode == 40){
			frame.direction = 0;
			frame.Y+=frame.speed;
		}

		if(frame.X>canvas.width-frame.W-15)
			frame.speed *= -1;
		if(frame.X<0)
			frame.speed = 0;

		ctx.drawImage(img,
		  // img sprite
		  frame.W*frame.currentFrame, frame.H*frame.direction,frame.W, frame.H, 
		  // canvas
		  frame.X, frame.Y, frame.W*2, frame.H*2);

		frame.currentFrame++;
		if(frame.currentFrame > 3)
			frame.currentFrame = 0;

		//console.log(event.keyCode); // gets keycode for key pressed


	}
	img.src = "deadpool.png";
}