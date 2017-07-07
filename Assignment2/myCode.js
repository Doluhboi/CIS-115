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
	let avatars = ["/home/kyle/CIS-115/Assignment1/images/iq.jpg",
	"/home/kyle/CIS-115/Assignment1/images/sledge.jpg","/home/kyle/CIS-115/Assignment1/images/jager.jpg",
	"/home/kyle/CIS-115/Assignment1/images/castle.jpg","/home/kyle/CIS-115/Assignment1/images/fuze.jpg"];
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
	//let userName = prompt("User 1 name: ");
	let userName = "kyle"; 					// for dev
	let ul = document.querySelector("#user1");
	let user1Id = document.createElement("ul");
	user1Id.innerHTML = 'Player 1: '+userName.toUpperCase();
	ul.appendChild(user1Id);

	//userName = prompt("User 2 name: ");
	userName = "batman"   	// for dev
	ul = document.querySelector("#user2");
	let user2Id = document.createElement("ul");
	user2Id.innerHTML = 'Player 2: '+userName.toUpperCase();
	ul.appendChild(user2Id);

	// add button feature
	let btn = document.querySelector("#gcBtn");
	btn.addEventListener("click", addGC);

	// reset info button
	let btn2 = document.querySelector("#confirmBtn");
	btn2.addEventListener("click", confirmInfo);

	let btn3 = document.querySelector("#resetBtn");
	btn3.addEventListener("click", resetInfo);

}

function addGC(){
	let opt = document.querySelector("#lvl");
	let input = document.querySelector("#gcInput");
	let newOpt = document.createElement("option");

	if(obj.hasOwnProperty(input.value)){
		newOpt.innerHTML = input.value;
		opt.appendChild(newOpt);
		input.value = '';
	}
	else
		alert("Not a valid code!");

}

function confirmInfo(){
	let currentInfo = document.querySelector("#currentLevel");
	let newInfo = document.querySelector("#lvl");
	currentInfo.innerHTML = obj[newInfo.value] +" :: " + newInfo.value;
}

function resetInfo(){
	let currentInfo = document.querySelector("#currentLevel");
	let newInfo = document.querySelector("#lvl");

	currentInfo.innerHTML = "Welcome!";

	let len = newInfo.options.length;
	for(let i = 1; i<len; i++){
		newInfo[i] = null;
	}

}

function updateTime(){
	let now = new Date();
	let ampm = "AM";

	h = now.getHours();
	m = now.getMinutes();
	s = now.getSeconds();
	
	if(h>= 12){
		if(h>12) h -= 12;
		ampm= 'PM';
	}

	if(m<10) m= '0'+m;
	if(s<10) s= '0'+s;
	let dateTime = now.toLocaleDateString()+ ' ' + h + ':' + m + ':' + s + ' ' + ampm;
	let t = document.querySelector("#time");
	t.innerHTML = dateTime;	
}

// creates object obj with gamecodes and values
let obj = {};
for(let i = 1; i<10;i++){
	obj["GC_"+i] = "Level-"+i;
}


