//creating and storing variables
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let choiceEl = document.querySelector("#choices");
let submitBtn = document.querySelector("#submit");
let questionTitleEl = document.querySelector("#question-title");
let timeEl = document.querySelector("#time");
let startScreenEl = document.querySelector("#start-screen");
let endScreenEl = document.querySelector("#end-screen");
let finalScoreEl = document.querySelector("#final-score");
let initalsEl = document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");



//creating arrays of questions as an object
let questions = [
    {
        title: "What is programming language?",
        options: ["stragies that are used in solving problem", "written language that tells computers what to do", "language understood by aliens", "method of communication using by Americans"],
        answer: "written language that tells computers what to do"
    },

    {
        title: "Example of programming language?",
        options: ["JavaScript", "Spanish", "English", "Germany"],
        answer: "JavaScript"
    },

    {
        title: "Type of programming language?",
        options: ["High Level", "Body language", "Speech language", "Love language"],
        answer: "High Level"
    },

    {
        title: "Which of the following is not a JavaScript function?",
        option: ["alert()", "eval()", "log()", "none"],
        answer: "none"
    },

    {
        title: "what function can be used to translate a string to an int?",
        option: ["Stringify", "toFloat", "valueOf", "toString"],
        answer: "toString"
    }
]

let currentQuestion = 0;
let time = questions.length * 15;
let timeId;
let score = 0;


//function that will kickstart the quiz
function startQuiz() {
    // removing the class hide in order to view the question
    questionEl.removeAttribute("class");

    //setting the class attribute to hide the start screen
    startScreenEl.setAttribute("class", "hide");
    timeEl.textContent = time;
    timeId = setInterval(timer, 1000);
    //displaying the set questions
    viewQuestion();
}

startBtn.addEventListener("click", startQuiz);

// function that will terminate the quiz signifying its end
function endQuiz() {
    clearInterval(timeId);

    endScreenEl.removeAttribute("class");

    finalScoreEl.textContent = time;

    questionEl.setAttribute("class", "hide");
}

// function that view the question
function viewQuestion() {
    let questionIndex = questions[currentQuestion];
    questionTitleEl.textContent = questionIndex.title;

    choiceEl.innerHTML = "";


    questionIndex.option.forEach((options, i) => {

        let optionButton = document.createElement("button");
        optionButton.setAttribute("class", "options");
        optionButton.setAttribute("value", options);

        optionButton.textContent = `${i + 1}. ${options}`;


        optionButton.onclick = clickOption();
        choiceEl.appendChild(optionButton);
    });
}

function clickOption() {
    let questionIndex2 = questions[currentQuestion];

    if (questionIndex2.option !== questionIndex2.answer) {
        time -= 10;
        if (time < 0) {
            time = 0;

        }
        timeEl.textContent = time;
        feedbackEl.textContent = "Incorrect!!!";
        feedbackEl.style.color = "black";
        let wrongAnswerAudio = new Audio("./assets/sfx/incorrect.wav");
        wrongAnswerAudio.play();
    }
    else {
        feedbackEl.textContent = "correct!!!";
        feedbackEl.style.color = "blue";
        let rightAnswerAudio = new Audio("./assets/sfx/correct.wav");
        rightAnswerAudio.play();
    }

    let displayTime = 1000;
    feedbackEl.setAttribute("class", "feedback");
    setInterval(function () {
        feedbackEl.setAttribute("class", "hide");
    }, displayTime);
    currentQuestion++;
    if (currentQuestion === questions.length) {
        endQuiz()

    }
    else {
        viewQuestion();
    }
}



function saveScores() {
    //saving the value of the intial in a variable
    let initials = initalsEl.value;

    if (initalsEl !== "") {
        let highScore = JSON.parse(localStorage.getItem("highScores")) || [];

        let newScore = { score: time, initial: initials };
        highScore.push(newScore);
        localStorage.setItem("highScore", JSON.stringify(highScore));

        location.href = "highscores.html";

    }
}

//function that keep track of the time
function timer() {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
        endQuiz();
    }

}

submitBtn.addEventListener("click", saveScores);
