/* PSEUDO-CODE
    - START BUTTON - When we press it:
        - The time counter starts
        - The question and the 4 options appears
            - We press the correct answer
                - Next question
            - We press the incorrect answer
                - Time is subtracted from the time counter
        - All questions are answered or the timer reaches 0
            - The game is over
                - I can save my initials and my score
                - I can press "go back"
                    - I go back to the start page
                - I clear the highscores
                    - All the scores saved are deleted
*/
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
    solution: 2,
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______.",
    answers: [
      "A. Quotes",
      "B. Curly brackets",
      "C. Parenthesis",
      "D. Square brackets",
    ],
    solution: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    answers: [
      "A. Numbers and strings",
      "B. Other arrays",
      "C. Booleans",
      "D. All of the above",
    ],
    solution: 3,
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    answers: ["A. Commas", "B. Curly brackets", "C. Quotes", "D. Parenthesis"],
    solution: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing contect to the debugger is:",
    answers: [
      "A. JavaScript",
      "B. Terminal / Bash",
      "C. For loops",
      "D. Console.log",
    ],
    solution: 3,
  },
];
var startButton = document.querySelector(".startQuiz");
var timerCount = document.querySelector(".timer-text");
var app = document.getElementById("gameStart");
var app = document.getElementById("app");
var currentQuestionIndex = 0;
document.getElementById("app").style.visibility = "hidden";
var score = 0; 
var timerCount = 75;
var timeIntervalUp;
// Game starts
startButton.addEventListener("click", function () {
  gameStart.innerHTML = "";
  document.getElementById("app").style.visibility = "visible";
  // Timer
  timeIntervalUp = setInterval(startTimer, 1000);
  showQuestion();
});

function startTimer() {
  document.getElementById("countDown").innerHTML = timerCount;
  timerCount--;

  if (timerCount == 0) {
    clearInterval(timeIntervalUp);
    endTimer();
  }
}

function endTimer() {
  document.getElementById("countDown").innerHTML = "The game is over";
}

// QUESTIONS & ANSWERS

function showQuestion() {
  var step = questions[currentQuestionIndex];
  var questionSection = document.createElement("section");
  var title = document.createElement("h2");
  var answers = document.createElement("ul");
  var result = document.createElement("p");
  app.innerHTML = "";

  for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    var li = document.createElement("li");
    li.textContent = questions[currentQuestionIndex].answers[i];

    li.addEventListener("click", function () {
      answerClick(i);
    });

    answers.appendChild(li);
  }

  title.innerHTML = questions[currentQuestionIndex].question;

  questionSection.appendChild(title);
  questionSection.appendChild(answers);
  questionSection.appendChild(result);

  document.getElementById("app").appendChild(questionSection);
}
function answerClick(i) {
  var isCorrectAnswer = i === questions[currentQuestionIndex].solution;
  console.log(isCorrectAnswer);
  if (isCorrectAnswer) {
    alert("CORRECT");
    score++;
    //result.textContent = "Correct answer!";
    //console.log(result);
  } else {
    alert("WRONG");
    // result.textContent = "Wrong answer.";
    timerCount -= 10;
    document.getElementById("countDown").innerHTML = timerCount;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
    // Clear the screen and present back an input box with the players score
    //When they enter their initials they can click a button which will get the value from the box 
var playersScore = {
    score: score,
    initials: "RS"
}

    // LOCAL STORAGE

    // create a variable which is assigned whatever is returned from get ... from local storage OR ELSE and empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || []; 

    highscores.push(playersScore);

    window.localStorage.setItem("highscores", JSON.stringify(highscores))
}
