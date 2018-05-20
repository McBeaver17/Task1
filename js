let button  = document.querySelector('#button')
let name 		= document.querySelector('#name')

function updateName(json) {
		name.innerText = json.name
}

function getName() {

	let randomNumber = Math.floor((Math.random() * 88) +1)
	let url = 'https://swapi.co/api/people/' + randomNumber

	fetch(url)
 	 .then(resp => resp.json())
	 .then(json => updateName(json))
	 .catch(error => console.log('error is', error));

}


button.addEventListener('click', getName)
