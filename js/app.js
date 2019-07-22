/* You most likely won't have to worry about this.
But if so, I'm writing comments regarding what it's doing to the dataSheet to make a quiz!
Knowing how loops work'll come in handy.*/

//init variables
const data = dataBase
const dataEntries = Object.entries(data)
const dataLength = Object.keys(data).length
let currentPage = 0
const quizBox = document.getElementById('quizBox');

for (let i = 0; i < Object.keys(data).length; i++) {
    console.log(i);
}

function checkDataSet() {

    if (currentPage != dataLength) {

        for (let j = 0; j < dataEntries[currentPage][1].responses.length; j++) {
            console.log(dataEntries[currentPage][1].responses[j].response)
            makeResponse([j], dataEntries[currentPage][1].responses[j].response)
        }

    } else if (currentPage == dataLength) {
    	console.log("Finished")
    }

}

function makeResponse(id, response) {
    var inputNode = document.createElement('input')
    var textNode = document.createTextNode(response)
    var divNode = document.createElement('div')

    inputNode.type = 'radio'
    inputNode.name = "Quiz"
    inputNode.dataset.id = id

    divNode.appendChild(inputNode)
    divNode.appendChild(textNode)
    quizBox.appendChild(divNode)
}


checkDataSet()

function init() {

}