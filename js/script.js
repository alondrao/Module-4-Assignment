var startButton = document.getElementById('start');
var quizButton = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var clearScoresButton = document.getElementById('clear-scores-btn');
var questionElement = document.getElementById('question');
var answersElement = document.getElementById('answer');
var initialsElement = document.getElementById('initials');
var scoreElement = document.getElementById('score');
var endElement = document.getElementById('end');
var highScoresElement = document.getElementById('high-scores');
var highScoresList = document.getElementById('high-scores-list');
var timeElement = document.getElementById('time');

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let time = 60;
let timerInterval;

var questions = [];

startButton.addEventListener('click', startGame);
quizButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

clearScoresButton.addEventListener('click', () => {
    localStorage.clear();
    highScoresList.innerHTML = '';
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    time = 60;
    scoreElement.innerText = score;
    timeElement.innerText = time;
    timerInterval = setInterval(() => {
        time--;
        timeElement.innerText = time;
        if (time <= 0) {
            endGame();
        }
    }, 1000);
    quizButton.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score += 10;
        scoreElement.innerText = score;
    } else {
        time -= 10;
        timeElement.innerText = time;
    }
    Array.from(answersElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        quizButton.classList.remove('hide');
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(timerInterval);
    quizButton.classList.add('hide');
    endElement.classList.remove('hide');
    initialsElement.focus();
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

submitButton.addEventListener('click', () => {
    const initials = initialsElement.value;
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push({ initials, score });
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    initialsElement.value = '';
    endElement.classList.add('hide');
    showHighScores();
});

function showHighScores() {
    highScoresElement.classList.remove('hide');
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScoresList.innerHTML = highScores
        .map(score => `<li>${score.initials} - ${score.score}</li>`)
        .join('');
}





