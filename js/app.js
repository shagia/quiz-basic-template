/* You most likely won't have to worry about this.
But if so, I'm writing comments regarding what it's doing to the dataSheet to make a quiz!
Knowing how loops work'll come in handy.*/

//init variables
const coreApp = document.getElementById('app');

const data = dataBase
const dataEntries = Object.entries(data)
const dataLength = Object.keys(data).length

// These two constraints gets the DOM elements of where the responses are rendered, and where the question is rendered.
// '5' is where the responses are, '3' is where the question is.
const quizBox = coreApp.childNodes[5]
const quizQuestion = coreApp.childNodes[3]

let currentPage = 0

//const quizBox = document.getElementById('quizBox');

for (let i = 0; i < Object.keys(data).length; i++) {
    console.log(i);
}

function checkDataSet() {

    if (currentPage != dataLength) {

        for (let j = 0; j < dataEntries[currentPage][1].responses.length; j++) {
            console.log(dataEntries[currentPage][1].responses[j].response)
            makeResponse([j], dataEntries[currentPage][1].responses[j].response, dataEntries[currentPage][1].question)
        }

    } else if (currentPage == dataLength) {
    	console.log("Finished")
    }

}

function makeResponse(id, response, question) {
    var inputNode = document.createElement('input')
    var textNode = document.createTextNode(response)
    var divNode = document.createElement('div')

    inputNode.type = 'radio'
    inputNode.name = "Quiz"
    inputNode.dataset.id = id
    quizQuestion.innerHTML = question

    divNode.appendChild(inputNode)
    divNode.appendChild(textNode)
    quizBox.appendChild(divNode)
}


checkDataSet()

function init() {

}


console.log(coreApp.childNodes)