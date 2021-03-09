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