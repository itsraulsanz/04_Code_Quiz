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
var app = document.querySelector(".app");


// Game starts
startButton.addEventListener("click", function() {
    app.innerHTML = "";
    
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
});


function endTimer() {
    document.getElementById("countDown").innerHTML = "The game is over";
}


// QUESTIONS & ANSWERS
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        correctAnswer: 2
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answers: ["A. Quotes", "B. Curly brackets", "C. Parenthesis", "D. Square brackets"],
        correctAnswer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: ["A. Numbers and strings", "B. Other arrays", "C. Booleans", "D. All of the above"],
        correctAnswer: 3
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: ["A. Commas", "B. Curly brackets", "C. Quotes", "D. Parenthesis"],
        correctAnswer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing contect to the debugger is:",
        answers: ["A. JavaScript", "B. Terminal / Bash", "C. For loops", "D. Console.log"],
        correctAnswer: 3
    }
];