// 

var startButton = document.getElementById("startButton");
var homeContainer =  document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionHeading = document.getElementById("questionHeading");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("correctAnswer"); 

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  setInterval(displayHello, 1000);
  console.log("Hello!");
}

let count= 0
// function to display the timer
function displayHello() {
  const timer= document.getElementById("demo")
  timer.innerHTML= count;
  count= count+1
}
// questions for the quiz
var questionsArray = [
  {
      question: "Question: What is the HTML tag under which you can write the JavaScript code?",
      imageSrc: "",
      answerChoice: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
      correctAnswer: 2
  }, 
  {
      question: "Question: What are variables used for in JavaScript Programs?",
      imageSrc: "",
      answerChoice: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Causing high-school algebra flashbacks", "D) None of the above"],
      correctAnswer: 0
  },
  {
      question: "Question: Which method adds a new item to the end of an array and returns the new length?",
      imageSrc: "",
      answerChoice: ["A) shift()", "B) return() ", "C) push() ", "D) pop()"],
      correctAnswer: 2
  }, 
  {
      question: "Question: Which of the following can't be done with client-side JavaScript?",
      imageSrc: "",
      answerChoice: ["A) Sending a form's contents by email", "B) Validating a form", "C) Storing the form's contents to a database file on the server", "D) None of the above"],
      correctAnswer: 2
  },
  {
      question: "Question: Which of the following are capabilities of functions in JavaScript?",
      answerChoice: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
      correctAnswer: 1
  }];
  // function to display the questions
  function displayQuestions() {
    questionHeading.textContent = questionsArray[0].question;
    answerChoiceA.textContent = questionsArray[0].answerChoice[0];
    answerChoiceB.textContent = questionsArray[0].answerChoice[1];
    answerChoiceC.textContent = questionsArray[0].answerChoice[2];
    answerChoiceD.textContent = questionsArray[0].answerChoice[3];
  }
 