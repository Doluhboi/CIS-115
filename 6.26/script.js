window.onload = init;

function init(){
	var btn = document.querySelector('button');
	btn.onclick = showAlert;
}
			
function showAlert(){
	alert('welcome!');
}

