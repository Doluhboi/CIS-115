// creates global object obj with gamecodes and values
let obj = {};
for(let i = 1; i<10;i++){
	obj["GC_"+i] = "Level-"+i;
}

//global variables
let ctx;
let can;
let cir_X = 300;
let dir_X = 1;
let cir_Y = 300;
let R = 20;
let dir_Y = 1;
let bar_X =20;
let bar_Y =150;
let bar_W = 30;
let bar_H = 100;
let score = 0;
let loading = setInterval(RndCircle,1000);



window.onload = function() {
	/* On page load, the following will be executed
	set clock value
	generate two random avatar pictures
	ask users for names
	*/

	// clock
	updateTime();
	setInterval(updateTime, 500);

	//avatars
	let avatars = ["images/iq.jpg", "images/sledge.jpg","images/jager.jpg",
	"images/castle.jpg","images/fuze.jpg"];
	let rand1 = avatars[Math.floor(Math.random() * avatars.length)];
	let rand2 = avatars[Math.floor(Math.random() * avatars.length)];
	while (rand1 == rand2){
		rand2 = avatars[Math.floor(Math.random() * avatars.length)];
	}
	let avatar1 = document.querySelector("#avatar1");
	avatar1.src = rand1;
	let avatar2 = document.querySelector("#avatar2");
	avatar2.src = rand2;

	// user info
	let aTag = document.querySelector("#user1");
	let userID = document.createElement("a");
	if(localStorage["user1ID"] == null){
		localStorage["user1ID"] = prompt("User 1 name: ");
		userID.innerHTML = 'Player 1: '+localStorage["user1ID"];
		aTag.appendChild(userID);
	} else {
		userID.innerHTML = 'Player 1: '+localStorage["user1ID"];
		aTag.appendChild(userID);
	}
	let a2Tag = document.querySelector("#user2");
	let user2ID = document.createElement("a");
	if(localStorage["user2ID"] == null){
		localStorage["user2ID"] = prompt("User 2 name: ");
		user2ID.innerHTML = 'Player 2: '+localStorage["user2ID"];
		a2Tag.appendChild(userID);
	} else{
		user2ID.innerHTML = 'Player 2: '+localStorage["user2ID"];
		a2Tag.appendChild(user2ID);
	}

	// add button feature
	let btn = document.querySelector("#gcBtn");
	btn.addEventListener("click", addGC);

	// reset info button
	let btn3 = document.querySelector("#resetBtn");
	btn3.addEventListener("click", resetInfo);

	// change info displayed when user selects an option
	let cngInfo = document.querySelector("#lvl");
	cngInfo.addEventListener("change", changeInfo);

	//referances to canvas
	can = document.querySelector("#myCanvas");
	ctx = can.getContext("2d");

	// function to make canvis fill container div
	fitCanvas(can);


	setTimeout(stopLoading, 3000);

	// game
	window.addEventListener("mousemove",mouseXY);


}

function addGC(){
	let opt = document.querySelector("#lvl");
	let input = document.querySelector("#gcInput");
	let newOpt = document.createElement("option");
	let x = input.value;

	// flag to check if GameCodes are unique to options bar
	let flag = false;
	if(obj.hasOwnProperty(input.value)){  								// checks user input to GameCodes object for match
		for(let i = 0; i<opt.options.length; i++){  					// checks all values in options bar
			if(input.value == opt.options[i].value){
				alert(`Game Code: ${input.value} already added!`);
				flag = true;
				break;
			}
		}
		if(flag == false){
			newOpt.innerHTML = input.value;
			opt.appendChild(newOpt);
		}

	}
	else
		alert("Not a valid code!");

}


function changeInfo(){
	let currentInfo = document.querySelector("#currentLevel");
	let newInfo = document.querySelector("#lvl");

	if(newInfo.value != "--Start!--")
		currentInfo.innerHTML = `${obj[newInfo.value]} :: ${newInfo.value}`;
}


function resetInfo(){
	let currentInfo = document.querySelector("#currentLevel");
	let newInfo = document.querySelector("#lvl");
	let d = document.createElement("option");
	d.innerHTML = "--Start!--";

	currentInfo.innerHTML = "Welcome!";
	newInfo.innerHTML = '';
	newInfo.appendChild(d);

	let input = document.querySelector("#gcInput");
	input.value = "";

}

function updateTime(){
	let now = new Date();
	let t = document.querySelector("#time");
	t.innerHTML = now;	
}

function RndCircle(){
	ctx.beginPath();
	let X = Math.floor(Math.random() * can.width);
	let Y = Math.floor(Math.random() * can.height);
	let R = Math.floor(Math.random() * 100);
	ctx.arc(X,Y,R,0,Math.PI*2);
	let Red = Math.floor(Math.random() * 255);
	let Green = Math.floor(Math.random() * 255);
	let Blue = Math.floor(Math.random() * 255);
	let Alpha = 15/R;
	ctx.fillStyle = `rgba(${Red},${Green},${Blue},${Alpha}`;
	ctx.fill();
	ctx.closePath();

	//text
	// ctx.beginPath();
	// ctx.fillStyle = "black";
	// ctx.font = "30px Comic Sans MS";
	// ctx.fillText("Game is Loading...",230,250);
	// ctx.closePath();
}


//canvas fill to size
function fitCanvas(canvas){
	can.style.width='100%';
	can.style.height='100%';
 	can.width  = canvas.offsetWidth;
 	can.height = canvas.offsetHeight;
}

function mouseXY(event){
    bar_Y = event.clientY;
}

function startGame(){
    drawball();
    drawbar();
}

function drawball(){
    //clearing everything from canvas
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,can.width,can.height);

    ctx.closePath();
    // 2. Drawing the circle in a new position
    ctx.beginPath();
    ctx.fillStyle="blue";
    ctx.arc(cir_X, cir_Y,20,0,2*Math.PI);

    if (cir_X+R > can.width ) {
        dir_X*=-1
    }

    if(cir_X-R<0){
    	gameOver();
    }

    if (cir_Y+R > can.height || cir_Y-R<0 ) {
        dir_Y*=-1
    }

    if ((cir_X-R <= bar_W*1.66) && (cir_Y>bar_Y) && (cir_Y<bar_Y+bar_H)){
        dir_X*=-1;
        score++;
        console.log(score);
    }

// hit box on bar


// if(cir_X-R<= bar_W){
//     dir_X*=-1
// }
    //cir_X = cir_X+5 //increasing object 5 pixels

    cir_X+=2*dir_X; 
    cir_Y+=3*dir_Y;

    ctx.fill();
    ctx.closePath();

}

function drawbar(){
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.fillRect(bar_X,bar_Y ,bar_W,bar_H);
    ctx.fill();
    ctx.closePath();
}

function stopLoading(){
	clearInterval(loading);
	setInterval(startGame,17);
}

function gameOver(){
	clearInterval(startGame);
}