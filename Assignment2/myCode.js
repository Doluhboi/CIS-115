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

	//get users info
	let userName = prompt("User 1 name: ");
	//let userName = "kyle"; 					// for dev
	let ul = document.querySelector("#user1");
	let user1Id = document.createElement("ul");
	user1Id.innerHTML = 'Player 1: '+userName.toUpperCase();
	ul.appendChild(user1Id);

	userName = prompt("User 2 name: ");
	//userName = "batman"   	// for dev
	ul = document.querySelector("#user2");
	let user2Id = document.createElement("ul");
	user2Id.innerHTML = 'Player 2: '+userName.toUpperCase();
	ul.appendChild(user2Id);

	// add button feature
	let btn = document.querySelector("#gcBtn");
	btn.addEventListener("click", addGC);

	// confirm button
	let btn2 = document.querySelector("#confirmBtn");
	btn2.addEventListener("click", confirmInfo);

	// reset info button
	let btn3 = document.querySelector("#resetBtn");
	btn3.addEventListener("click", resetInfo);

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

function confirmInfo(){
	let currentInfo = document.querySelector("#currentLevel");
	let newInfo = document.querySelector("#lvl");
	if(newInfo.value == "--Start!--")
		alert("Please select a level");
	else
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
}

function updateTime(){
	let now = new Date();
	let t = document.querySelector("#time");
	t.innerHTML = now;	
}

// creates object obj with gamecodes and values
let obj = {};
for(let i = 1; i<10;i++){
	obj["GC_"+i] = "Level-"+i;
}


