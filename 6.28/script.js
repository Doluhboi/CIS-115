// anonymus function
window.onload = function() {

	// getting a referance
	let btn = document.querySelector('#btnSubmit');
	// handling the onclick event
	// btn.onclick = addItem;
	// prefered way
	btn.addEventListener("click", addItem);

	let itemsArray = ["Text", "Video", "Audio"];

	let sel = document.querySelector("#drpType");

	for (let i = 0; i < itemsArray.length; i++){
		let optItem = document.createElement("option");
		optItem.innerHTML = itemsArray[i];
		sel.appendChild(optItem);
	}
	
} 

function addItem(){



}