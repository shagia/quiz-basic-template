//init variables
const data = dataBase
const dataEntries = Object.entries(data)
const dataLength = Object.keys(data).length
let currentPage = 2
const responseNode = document.getElementById('responseBox');

for (let i = 0; i < Object.keys(data).length; i++) {
    console.log(i);
}

function checkDataSet() {

    if (currentPage != dataLength) {

        for (let j = 0; j < dataEntries[currentPage][1].responses.length; j++) {
            console.log(dataEntries[currentPage][1].responses[j].response)
            makeResponse(dataEntries[currentPage][1].responses[j].id, dataEntries[currentPage][1].responses[j].response)
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
    responseNode.appendChild(divNode)
}


checkDataSet()

function init() {

}