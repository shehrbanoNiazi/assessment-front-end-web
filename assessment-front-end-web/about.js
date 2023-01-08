console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let picselector = document.querySelector("#catpic");

picselector.addEventListener('mouseover', giveCompliment);

function giveCompliment() {
	alert('youre a good human!') 
}

 