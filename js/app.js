/* You most likely won't have to worry about this.
But if so, I'm writing comments regarding what it's doing to the dataSheet to make a quiz!
Knowing how loops work'll come in handy.*/

// connect to data-old.json
const data = dataBase
// init variables
let currentPage
let ansRight
// bind to DOM elements
const coreApp = document.getElementById('app')
const questionContainer = coreApp.childNodes[1]

const answerContainer = coreApp.childNodes[3]
const answerResponse = document.getElementById('ansResponse')
const answerNumber = document.getElementById('answerNum')

const finalContainer = coreApp.childNodes[5]

const submit = document.getElementById('submitA')
const continueQ = document.getElementById('continue')

//convert objects
const dataEntries = Object.entries(data)
const dataLength = Object.keys(data).length
// These constraints gets the DOM elements of where the responses are rendered, and where the question is rendered.
// '7' is where the responses are, '5' is where the question is.
const quizBox = questionContainer.childNodes[7]
const quizQuestion = questionContainer.childNodes[5]
const quizImage = document.getElementById('questionImg')

function cleanPage() {
    while (quizBox.firstChild) { quizBox.removeChild(quizBox.firstChild); }
    // Kinda lazy, am I properly disposing of the DOM elements (i.e properly removing it from memory) or would it be better to get more specific?
}

submit.addEventListener("click", function() {
    //Radames doesn't want the main page to disappear
    //questionContainer.style.display = "none"
    getRadioAnswer();
    answerContainer.style.display = "inline"
})

continueQ.addEventListener("click", function() {
    cleanPage()
    // Maybe currentPage should be a variable in progress
    answerContainer.style.display = "none"
    currentPage++
    progress()
    questionContainer.style.display = "inline"
})

/* Checks the currentPage variable in comparison to dataLength => loops through currentPage's objects => passes objects to the makeResponse function and binds the submit button to getRadioAnswer => Renders title, radios and text for each respective array */

function init() {
    // Maybe before you start the quiz, you want to initalize a start page? This is where you could do such a thing, but for now, it starts directly at the start of a quiz.

    finalContainer.style.display = "none"
    currentPage = 0
    ansRight = 0
    progress()
}

function progress() {
    if (currentPage != dataLength) { // Moving up

        for (let j = 0; j < dataEntries[currentPage][1].responses.length; j++) {
            makeResponse([j], dataEntries[currentPage][1].responses[j].response, dataEntries[currentPage][1].question)
            quizImage.src = dataEntries[currentPage][1].imageURL
            console.log(currentPage)
        }
    } else if (currentPage == dataLength) { // dataLength is equal to currentPage
        answerContainer.style.display = "none"
        questionContainer.style.display = "none"
        finalContainer.style.display = "inline"



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

    quizQuestion.textContent = question

    // We then make a radio for each response and append them together.
    // inputNode (the radio) + textNode (the response text) = > inputCombo, a div element => quizBox, the core container

    inputCombo.appendChild(inputNode)
    inputCombo.appendChild(textNode)
    quizBox.appendChild(inputCombo)
}

function getRadioAnswer() {

    // ToDo: Get radio buttons directly from quizBox instead of running through the entire document
    const radios = document.getElementsByName('Quiz')

    for (let r = 0; r < radios.length; r++) {
        // If it finds a checked radio box, it should find if it's true in the database
        if (radios[r].checked) {
            console.log("Radio is checked....")

            if (radios[r].value == dataEntries[currentPage][1].answer) {
                console.log("..and the answer is true!")
                answerResponse.textContent = dataEntries[currentPage][1].responses[radios[r].value].answerMessage
                ansRight++
                answerNumber.textContent = ansRight
            } else {
                console.log("..and the answer is wrong!")
                answerResponse.textContent = dataEntries[currentPage][1].responses[radios[r].value].answerMessage
                // We don't count the incorrect answers here
                answerNumber.textContent = ansRight
            }
        }
    }
}


init()