window.onclick = init;

function init() {
	// getting a referance
	let btn = document.querySelector('#btnSubmit');
	// do something with the handler
	btn.onclick = addItem;
}

function addItem(){
	let ul = document.querySelector("#shoppingList");
	let input = document.querySelector("#txtItem");

	//alert(input.value);     		// debug on the page
	//console.log(input.value);		// debug in the colsole


	for (let i = 0; i<100; i++){
		if (i%2==0){
			// create element
			let liItem = document.createElement("li");

			// modify the attribute
			liItem.innerHTML = input.value + '-' + i;
			// add to html doc (it's parent)
			ul.appendChild(liItem);
		}
	}

	// reset item text field
	input.value = '';



}