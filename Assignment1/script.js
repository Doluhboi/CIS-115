window.onload = function() {

	// // init folders
	// let foldersArray = ["assign1","assign2","assign3","assign4","assign5","assign6","assign7"];
	// let fol = document.querySelector("#folders");
	// for (let i = 0; i < foldersArray.length; i++){
	// 	let folderItem = document.createElement("a");
	// 	folderItem.innerHTML = foldersArray[i] + " ";
	// 	fol.appendChild(folderItem);
	// }

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


}