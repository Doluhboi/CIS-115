window.onload = function() {

	/* On page load, the following will be executed
	set clock value
	generate two random avatar pictures
	ask users for names
	*/

	// clock
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
	let tVal = document.createElement("span");
	tVal.innerHTML = dateTime;
	t.appendChild(tVal)

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
	let userName = prompt("User 1 name: ");
	let ul = document.querySelector("#user1");
	let user1Id = document.createElement("ul");
	user1Id.innerHTML = 'Player 1: '+userName.toUpperCase();
	ul.appendChild(user1Id);

	userName = prompt("User 2 name: ");
	ul = document.querySelector("#user2");
	let user2Id = document.createElement("ul");
	user2Id.innerHTML = 'Player 2: '+userName.toUpperCase();
	ul.appendChild(user2Id);

}