const startPage = document.getElementById('start')
const startButton = document.getElementById('start-btn')
const quizPage = document.getElementById('quiz')
const scorePage = document.getElementById('score')

//start quiz//
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startPage.style.display = "none"
    quizPage.style.display = "flex"
}