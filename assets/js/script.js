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


var startButton = document.querySelector(".startQuiz");
var wordBlank = document.querySelector(".wordblank");
var timerCount = document.querySelector(".timer-text");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");


// Game starts
startButton.addEventListener("click", startTimer);


// Timer
var timerCount = 75;
var timeIntervalUp = setInterval(function() { startTimer() }, 1000);

function startTimer() {
    document.getElementById("countDown").innerHTML = timerCount;
    timerCount--;

    if (timerCount == 0) {
        clearInterval(timeIntervalUp);
        endTimer();
        reload();
    }
}

function endTimer() {
    document.getElementById("countDown").innerHTML = "The game is over";
}

// HTML structure

var h2El = document.createElement("h2");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Add text for list items
h2El.textContent = question1.question;
li1.textContent = question1.answerA;
li2.textContent = question1.answerB;
li3.textContent = question1.answerC;
li4.textContent = question1.answerD;

// Append questions items
body.appendChild(h2El);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);


// QUESTIONS & ANSWERS
var question1 = {
    question: "Commonly used data types DO NOT include:",
    answerA: "A. Strings",
    answerB: "B. Booleans",
    answerC: "C. Alerts",
    answerD: "D. Numbers",
    correctAnswer: "c",
}

var question2 = {
    question: "The condition in an if/else statement is enclosed within _______.",
    answerA: "A. Quotes",
    answerB: "B. Curly brackets",
    answerC: "C. Parenthesis",
    answerD: "D. Square brackets",
    correctAnswer: "c",
}

var question3 = {
    question: "Arrays in JavaScript can be used to store _______.",
    answerA: "A. Numbers and strings",
    answerB: "B. Other arrays",
    answerC: "C. Booleans",
    answerD: "D. All of the above",
    correctAnswer: "d",
}

var question4 = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answerA: "A. Commas",
    answerB: "B. Curly brackets",
    answerC: "C. Quotes",
    answerD: "D. Parenthesis",
    correctAnswer: "d",
}

var question5 = {
    question: "A very useful tool used during development and debugging for printing contect to the debugger is:",
    answerA: "A. JavaScript",
    answerB: "B. Terminal / Bash",
    answerC: "C. For loops",
    answerD: "D. Console.log",
    correctAnswer: "d",
}