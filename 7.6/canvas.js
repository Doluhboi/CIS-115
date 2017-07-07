window.onload = function(){
	let canvas = document.querySelector("#myCanvas");
	let ctx = canvas.getContext("2d");

	// ctx.fillStyle="red";
	// ctx.fillRect(0,0,canvas.width,canvas.height);

	ctx.fillStyle = "red";
	// ctx.fillRect(0,175,400, 50);
	// ctx.fillRect(120,0, 50, 400);

	ctx.arc(200,200,100,0,2*Math.PI,true);
	//ctx.stroke();
	ctx.fill();
}