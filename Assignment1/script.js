window.onload = function() {

	// clock
	let now = new Date();
	let ampm = "am";

	h = now.getHours();
	m = now.getMinutes();
	s = now.getSeconds();
	
	if(h>= 12){
		if(h>12) h -= 12;
		ampm= 'pm';
	}

	if(m<10) m= '0'+m;
	if(s<10) s= '0'+s;
	let dateTime = now.toLocaleDateString()+ ' ' + h + ':' + m + ':' + s + ' ' + ampm;
	let t = document.querySelector("#time");
	let tVal = document.createElement("span");
	tVal.innerHTML = dateTime;
	t.appendChild(tVal)

	//avatars
	let avatars = [
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
	let user1 = "kyle" //prompt("User ones name: ");

	let user2 = "batman" //prompt("User twos name: ");

	// let user1Tag = document.querySelector("user1");
	// let avatar1Name = document.createElement("ul");
	// avatar1Name.innerHTML = user1;
	// user1Tag.appendChild(avatar1Name);

	// let user2Tag = document.querySelector("user2");
	// let avatar2Name = document.createElement("ul");
	// avatar2Name.innerHTML = user2;
	// user2Tag.appendChild(avatar2Name);







}