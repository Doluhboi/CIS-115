function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert("oops, there was an error")
	}
}

function displayLocation(position) { // Extract location properties from position object and display using ES6 template literal
	// let latitude = position.coords.latitude;
	let latitude = 51.17675001306865;

	// let longitude = position.coords.longitude;
	let longitude =  -115.5574418890999;
	let altitude = position.coords.altitude;
	let div = document.querySelector("#location");
	div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}, Altitude: ${altitude}`;

	let coord = {latitude:51.17675001306865, longitude:-115.5574418890999}

	showMap(coord);
} 

let map;
let marker;

function showMap(coords){
	let googleLatAndLong = new google.maps.LatLng(51.17675001306865,  -115.5574418890999); 
	let mapOptions = { zoom: 18, center: googleLatAndLong, mapTypeId: google.maps.MapTypeId.SATELLITE }; 
	let mapDiv = document.querySelector("#map");
	map = new google.maps.Map(mapDiv, mapOptions);
	addMarker(googleLatAndLong);
}

// Function to add marker to current map 
function addMarker(latlong) { 
	let markerOptions = { position: latlong, map: map };
	marker = new google.maps.Marker(markerOptions); 
	marker.addListener('click', function() { 
		//let infoWindow = new google.maps.InfoWindow(); 
		alert("marker clicked"); }
		);
}


window.onload = getMyLocation;
