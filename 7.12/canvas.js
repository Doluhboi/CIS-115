// global variables
let canvas;
let ctx;
let colorArray = ["red","green","blue","purple", "black"];

window.onload = function(){
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext("2d");
	//drawCar();
	loopCircle(20);
	loadImg();
	trackMe();
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
		let cColor = colorArray[Math.floor(Math.random()*colorArray.length)];
		ctx.arc(x,canvas.height-radius,radius,0,Math.PI*2);
		ctx.fillStyle = cColor;
		ctx.fill();
		ctx.closePath();
		x+=radius*2;
	}
}

function loadImg(){
	let img = new Image();
	img.onload = function(){
		ctx.drawImage(img , 100, 100, 120,120);

	}
	img.src = "funny.jpg"
}

function rememberMe(){
	// adding new record to LS
	
	localStorage.setItem("numVisits",1);
	localStorage.setItem("numVisits", 10);

	alert(localStorage["numVisits"]);

	if(localStorage["numVisits"]!= null)
		alert("key exists");

}

function trackMe(){
	if(localStorage["visitNum"] == null){
		alert("welcome new newb!");
		localStorage["visitNum"] = 1;
	} else {
		let nvString = localStorage["visitNum"];
		nvInt = parseInt(nvString);
		nvInt++;
		localStorage['visitNum'] = nvInt;
		alert(`welcome back for the ${localStorage["visitNum"]}th time`);

	}

}