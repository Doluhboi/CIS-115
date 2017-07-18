// global 
let noteItems = [];


window.onload = function() {
	// getting a reference
	let btn = document.querySelector('#btnSubmit');
	
	// handling the onclick event
	// btn.onclick = addItem;
	btn.addEventListener("click", addItem);


	let itemsArray = ['Text', 'Video', 'Photo', 'Map'];

	let drp  = document.querySelector("#drpType");

	for(let i=0; i< itemsArray.length; i++ )
	{
		let opt = document.createElement('option');
		opt.innerHTML = itemsArray[i];
		drp.appendChild(opt);
	}

	recallNotes();

	
}

//define a function like this:
function addItem() {
	let ul = document.querySelector('#shoppingList');
	let input = document.querySelector('#txtItem');	

	let drp  = document.querySelector("#drpType");

	if (drp.selectedIndex==0) // adding a text note
	{
		if(input.value.length !=0 )   //input.value != ''
		{
			let liItem = document.createElement("li");
			// modifying the attributes
			liItem.innerHTML = input.value ;
			ul.appendChild(liItem);

			// add notes to array and serialize array to local storage
			noteItems.push(input.value);
			localStorage.setItem("Notes", JSON.stringify(noteItems));
		}else{
			alert("please correct the input!");
		}
	}


	if( drp.selectedIndex == 3)
	{
		let lat = prompt("what is the latitude:");
		let lng = prompt("what is the longitude:");
		
		let coords = {latitiude: parseFloat(lat)  , longitude: parseFloat(lng) };
		showMap(coords);
	}


}


function recallNotes(){
	// key: "Notes"
	if(localStorage["Notes"] != null){ // returning visitor
		let ul = document.querySelector('#shoppingList');
		// JSON.parse returns serialized items
		noteItems = JSON.parse(localStorage["Notes"]);
		for(let i=0; i<noteItems.length; i++){
			let liItem = document.createElement("li");
			liItem.innerHTML = noteItems[i];
			ul.appendChild(liItem);

		}

	}else{ // new visitor
		alert("welcome!");

	}
}



// --------------------------------------------------    Adding Map Function ----------------------

let map;
let marker;
function showMap(coords) { 
	// Create a Google latitude/longitude object 
	let googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
	// Set a few map options 
	let mapOptions = { zoom: 18, center: googleLatAndLong, mapTypeId: google.maps.MapTypeId.SATELLITE }; 
	// getting a reference to a tag that "map" is its ID
	let mapDiv = document.querySelector("#map"); 

	map = new google.maps.Map(mapDiv, mapOptions); 

	addMarker(googleLatAndLong);
}

// Function to add marker to current map 
function addMarker(latlong) { 
	let markerOptions = { position: latlong, map: map }; 
	marker = new google.maps.Marker(markerOptions); 
	marker.addListener('click', function() {
	 // let infoWindow = new google.maps.InfoWindow();
	 alert("marker clicked"); }
	);
}

