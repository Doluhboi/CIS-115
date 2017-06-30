function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert("oops, there was an error")
	}
}

function displayLocation(position) { // Extract location properties from position object and display using ES6 template literal
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	let altitude = position.coords.altitude;
	let div = document.querySelector("#location");
	div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}, Altitude: ${altitude}`;
	showMap(position.coords);
} 

let map;

function showMap(coords){
	let googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude); 
	let mapOptions = { zoom: 18, center: googleLatAndLong, mapTypeId: google.maps.MapTypeId.SATELLITE }; 
	let mapDiv = document.querySelector("#map");
	map = new google.maps.Map(mapDiv, mapOptions)
}


window.onload = getMyLocation;
