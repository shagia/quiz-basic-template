const data = dataBase
const responseNode = document.getElementById('responseBox');

for (let i=0; i < Object.keys(data).length; i++) {
	console.log(i);
}

function makeResponse(id, response){
	var inputNode = document.createElement('input')
	var textNode = document.createTextNode(response)
    var divNode = document.createElement('div')

	inputNode.type = 'checkbox'
	inputNode.dataset.id = id

	divNode.appendChild(inputNode)
	divNode.appendChild(textNode)
	responseNode.appendChild(divNode)
}

makeResponse(2, "Big fuckin joke")

function init(){

	let section = 0



}