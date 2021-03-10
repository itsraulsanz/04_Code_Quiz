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
var timerCount = document.querySelector(".timer-text");
var app = document.getElementById("gameStart");
var app = document.getElementById("app");

document.getElementById("app").style.visibility = "hidden";



// Game starts
startButton.addEventListener("click", function() {
    gameStart.innerHTML = "";
    document.getElementById("app").style.visibility = "visible";
    
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
});


// QUESTIONS & ANSWERS
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        solution: 2
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answers: ["A. Quotes", "B. Curly brackets", "C. Parenthesis", "D. Square brackets"],
        solution: 2
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: ["A. Numbers and strings", "B. Other arrays", "C. Booleans", "D. All of the above"],
        solution: 3
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: ["A. Commas", "B. Curly brackets", "C. Quotes", "D. Parenthesis"],
        solution: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing contect to the debugger is:",
        answers: ["A. JavaScript", "B. Terminal / Bash", "C. For loops", "D. Console.log"],
        solution: 3
    }
];


function showQuestion(stepIndex) {
    var step = questions[stepIndex];
    var questionSection = document.createElement("section");
    var title = document.createElement("h2");
    var answers = document.createElement("ul");
    var result = document.createElement("p");
    app.innerHTML = "";
  
    function answerClick(i) {
      var isCorrectAnswer = i === step.solution;
  
      if (isCorrectAnswer) {
        //alert("CORRECT");
        result.textContent = "Correct answer!";
      } else {
        //alert("WRONG");
        result.textContent = "Wrong answer.";
        timeIntervalUp = timeIntervalUp - 10;
      }
  
      showQuestion(stepIndex + 1);
    }
  
    for (let i = 0; i < step.answers.length; i++) {
      var li = document.createElement("li");
      li.textContent = step.answers[i];
  
      li.addEventListener("click", function () {
        answerClick(i);
      });
  
      answers.appendChild(li);
    }
  
    title.innerHTML = step.question;
  
    questionSection.appendChild(title);
    questionSection.appendChild(answers);
    questionSection.appendChild(result);
  
    document.getElementById("app").appendChild(questionSection);
  }
  
  showQuestion(0);