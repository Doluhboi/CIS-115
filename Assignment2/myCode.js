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
	
	// for(let i=0; i< opt.options.length; i++){
	// 	if (input== opt.options[i].text)
	// 	{
	// 		console.log('err');
	// 		break;
	// 	}
	// }

	if(obj.hasOwnProperty(input.value)){
		for(let i = 0; i<opt.options.length; i++){
			if(input.value.text == opt.options[i].text){
				break
			} else {
				newOpt.innerHTML = input.value;
				opt.appendChild(newOpt);
				
			}
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
		currentInfo.innerHTML = obj[newInfo.value] +" :: " + newInfo.value;
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


