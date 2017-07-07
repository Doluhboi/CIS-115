// anonymus function
window.onload = function() {

	// getting a referance
	let btn = document.querySelector('#btnSubmit');

	btn.addEventListener("click", addItem);

	let itemsArray = ["Text", "Video", "Audio", "Map"];

	let drp = document.querySelector("#drpType");

	for (let i = 0; i < itemsArray.length; i++){
		let optItem = document.createElement("option");
		optItem.innerHTML = itemsArray[i];
		drp.appendChild(optItem);
	}
	
} 

function addItem(){

	let ul = document.querySelector("#notesList");
	let input = document.querySelector("#txtItem");

	let drp = document.querySelector("drpType");

	alert(drp.selectedIndex);

	// if(drp.selectedIndex == 0){
	// 	if(input.value.length != 0){
	// 		let liItem = document.createElement("li");
	// 		liItem.innerHTML = input.value;
	// 		ul.appendChild(liItem);
	// 	} else {
	// 		alert("Please input text");
	// 	}
	// }


	// if(drp.selectedIndex==3){
	// 	let lat = prompt("what is the lat:");
	// 	let lon = prompt("what is the lon:");
	// 	let coords = {latitude:parseInt(lat), longitude:parseInt(lon)};
	// 	showMap(coords);

	// }


}