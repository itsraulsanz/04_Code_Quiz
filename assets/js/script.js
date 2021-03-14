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

// QUESTIONS, ANSWERS & SOLUTIONS
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    solution: 2,
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______.",
    answers: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    solution: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    answers: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    solution: 3,
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    answers: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    solution: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing contect to the debugger is:",
    answers: ["JavaScript", "Terminal / Bash", "For loops", "Console.log"],
    solution: 3,
  },
];

var startButton = document.querySelector(".startQuiz");
var timerCount = document.querySelector(".timer-text");
var app = document.getElementById("gameStart");
var viewHighscoresSection = document.getElementById("viewHighscores");
var app = document.getElementById("app");
document.getElementById("app").style.display = "none";
var gameEnd = document.getElementById("gameEnd");
document.getElementById("gameEnd").style.display = "none";
var currentQuestionIndex = 0;
var score = 0;
var timerCount = 75;
var timeIntervalUp;

// Go to the Highscores ranking
var viewHighscores = document.getElementById("viewHighscores");
var highscoresRankingButton = document.createElement("button");
highscoresRankingButton.textContent = "View highscores";

viewHighscores.appendChild(highscoresRankingButton);

viewHighscores.addEventListener("click", function () {
  gameStart.style.display = "none";
  renderGameHighscores();
});

// Game starts
startButton.addEventListener("click", function () {
  document.getElementById("gameStart").style.display = "none";
  highscoresRankingButton.style.display = "none";
  document.getElementById("app").style.display = "block";
  timeIntervalUp = setInterval(startTimer, 1000);
  showQuestion();
  // endQuiz();
  // renderGameHighscores();
});

// Timer
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

// Questions
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
    //alert("CORRECT");
    score += 10;
    //result.textContent = "Correct answer!";
    //console.log(result);
    showResult(true);
  } else {
    //alert("WRONG");
    // result.textContent = "Wrong answer.";
    timerCount -= 10;
    document.getElementById("countDown").innerHTML = timerCount;
    showResult(false);
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function showResult(isCorrect) {
  var resultWrapper = document.getElementById("result");
  var questionResult = document.createElement("p");
  resultWrapper.innerHTML = "";

  resultWrapper.appendChild(questionResult);

  if (isCorrect) {
    questionResult.textContent = "Correct answer!";
  } else {
    questionResult.textContent = "Wrong answer :(";
  }

  setTimeout(function () {
    questionResult.remove();
  }, 1000);
}

function endQuiz() {
  document.getElementById("app").style.display = "none";
  document.getElementById("countDown").style.display = "none";
  document.getElementById("gameEnd").style.display = "block";
  document.getElementById("finalScore").textContent = score;

  var submitScoreButton = document.getElementById("submitScoreButton");
  var initialsInput = document.getElementById("initials");

  submitScoreButton.addEventListener("click", function (event) {
    event.preventDefault();

    saveUserScore(score, initialsInput.value);
    document.getElementById("gameEnd").style.display = "none";
    renderGameHighscores();
  });
}

function saveUserScore(score, initials) {

  var playersScore = {
    initials: initials,
    score: score,
  };
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  highscores.push(playersScore);

  window.localStorage.setItem("highscores", JSON.stringify(highscores));
}

function renderGameHighscores() {
  var gameHighscoresWrapper = document.getElementById("gameHighscores");
  gameHighscoresWrapper.style.display = "block";
  highscoresRankingButton.style.display = "none";

  var highscoresResults = document.createElement("section");
  var highscoresResultsTitle = document.createElement("h2");
  var highscoresResultsScores = document.createElement("ul");

  highscoresResults.appendChild(highscoresResultsTitle);
  highscoresResults.appendChild(highscoresResultsScores);
  highscoresResultsTitle.textContent = "High Scores:";

  gameHighscoresWrapper.appendChild(highscoresResults);

  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  for (let i = 0; i < highscores.length; i++) {
    var li = document.createElement("li");
    li.textContent = highscores[i].initials + ": " + highscores[i].score;
    highscoresResultsScores.appendChild(li);
  }

  // clear scores
  var clearScoreButton = document.createElement("button");
  clearScoreButton.textContent = "Clear Highscores";
  highscoresResults.appendChild(clearScoreButton);

  clearScoreButton.addEventListener("click", function () {
    localStorage.clear();
    highscoresResultsScores.innerHTML = "";
  });

  // go to the index page
  var playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again";
  highscoresResults.appendChild(playAgainButton);

  playAgainButton.addEventListener("click", function () {
    gameHighscores.style.display = "none";
    gameStart.style.display = "block";
    location.reload();
  });
}
