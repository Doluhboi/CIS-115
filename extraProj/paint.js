let canvas;
let ctx;
let brushSize;
let mouseIsDown = 0;

// let canColor = document.querySelector("#bkgrColor");

window.onload = () => {
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext("2d");

	canvas.addEventListener("mousemove",draw);
	canvas.addEventListener("mousedown",()=>{mouseIsDown=1;});
	canvas.addEventListener("mouseup",()=>{mouseIsDown=0;});

	let btn = document.querySelector("#submitBtn");
	let bSize = document.querySelector("#brSize");
	btn.addEventListener("click", ()=>{brushSize=parseInt(bSize.value);});
	// canColor.addEventListener("change", ()={
	// 	if(canColor.selectedIndex == 1){
	// 		ctx.beginPath();
	// 		ctx.fillStyle="grey";
	// 		ctx.fillRect(0,0,canvas.width,canvas.height);
	// 		ctx.closePath();
	// 	}
	// });
	let canColor = document.querySelector("#bkgrColor");
	canColor.addEventListener("change", changeBg);
	
	
}

function draw(event){
	let drp = document.querySelector("#shapeSelect");
	let cDrp = document.querySelector("#colorSelect");

	ctx.beginPath();
	if(cDrp.selectedIndex == 0){
		ctx.fillStyle = "red";
	}
	if(cDrp.selectedIndex == 1){
		ctx.fillStyle = "green";
	}
	if(cDrp.selectedIndex == 2){
		ctx.fillStyle = "blue";
	}
	if(mouseIsDown == 1){
		if(drp.selectedIndex == 0){
			ctx.arc(event.clientX-(brushSize/2),
				event.clientY-(brushSize/2),brushSize,0,Math.PI*2);
			ctx.fill();
		}
		if(drp.selectedIndex == 1){
			ctx.moveTo(event.clientX,event.clientY);
			ctx.lineTo(event.clientX-brushSize,event.clientY+brushSize);
			ctx.lineTo(event.clientX+brushSize,event.clientY+brushSize);
			ctx.fill();

		}
		if(drp.selectedIndex == 2){
			ctx.fillRect(event.clientX-(brushSize/2),
				event.clientY-(brushSize/2), brushSize, brushSize);
		}
	
	}
	ctx.closePath();
}

function changeBg(){
	let canColor = document.querySelector("#bkgrColor");
	ctx.beginPath()
	if(canColor.selectedIndex == 0){
		ctx.fillStyle = "white";
	}
	if(canColor.selectedIndex == 1){
		ctx.fillStyle = "grey";
	}
	if(canColor.selectedIndex == 2){
		ctx.fillStyle = "black";
	}

	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.closePath();
}


