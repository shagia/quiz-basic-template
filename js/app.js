/* You most likely won't have to worry about this.
But if so, I'm writing comments regarding what it's doing to the dataSheet to make a quiz!
Knowing how loops work'll come in handy.*/

//init variables
const coreApp = document.getElementById('app')
const submit = document.getElementById('submitA')
const data = dataBase
const dataEntries = Object.entries(data)
const dataLength = Object.keys(data).length
// These two constraints gets the DOM elements of where the responses are rendered, and where the question is rendered.
// '5' is where the responses are, '3' is where the question is.
const quizBox = coreApp.childNodes[5]
const quizQuestion = coreApp.childNodes[3]
let currentPage = 0


/* Checks the currentPage variable in comparison to dataLength => loops through currentPage's objects => passes objects to the makeResponse function and binds the submit button to getRadioAnswer => Renders title, radios and text for each respective array */

function init() {

    if (currentPage != dataLength) {

        for (let j = 0; j < dataEntries[currentPage][1].responses.length; j++) {
            //console.log(dataEntries[currentPage][1].responses[j].response);

            makeResponse([j], dataEntries[currentPage][1].responses[j].response, dataEntries[currentPage][1].question)

        }
        submit.addEventListener("click", function() {
            getRadioAnswer();
        })
    } else if (currentPage == dataLength) {
        console.log("Finished")
    }

}

function makeResponse(id, response, question) {
    // Creates variables with required DOM elements
    var inputNode = document.createElement('input')
    var textNode = document.createTextNode(response)
    var inputCombo = document.createElement('div')

    // We now give the elements attributes through JS
    inputNode.type = 'radio'
    inputNode.name = "Quiz"
    inputNode.value = id

    inputCombo.className = "quizAnswer"

    quizQuestion.innerHTML = question

    // We then make a radio for each response and append them together.
    // inputNode (the radio) + textNode (the response text) = > inputCombo, a div element => quizBox, the core container

    inputCombo.appendChild(inputNode)
    inputCombo.appendChild(textNode)
    quizBox.appendChild(inputCombo)
}



function getRadioAnswer() {

    // ToDo: Get radio buttons directly from quizBox instead of running through the entire document
    const radios = document.getElementsByName('Quiz')
    
    for (let r = 0; r < radios.length; r++){
        // If it finds a checked radio box, it should find if it's true in the database
        if (radios[r].checked) {
            console.log("Radio is checked....")
            if (radios[r].value == dataEntries[currentPage][1].answer){
                console.log("..and the answer is true!")

                while (quizBox.firstChild) {
    quizBox.removeChild(quizBox.firstChild);
    }

                currentPage++
                init()
            }

            //console.log(radios[r].type)
        }
    }
}

// Should 
function makeAnswer(id, ){

}


init()
