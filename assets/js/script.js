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
 let questions =[
    {
        title: "What is programming language?", 
        options:["stragies that are used in solving problem", "written language that tells computers what to do", "language understood by aliens", "method of communication using by Americans"],
        answer: "written language that tells computers what to do"
    },

    {
        title:"Example of programming language?",
        options:["JavaScript","Spanish", "English", "Germany"],
        answer: "JavaScript"
    },

    {
        title:"Type of programming language?",
        options:["High Level", "Body language", "Speech language", "Love language"],
        answer: "High Level"
    },

    {
        title:"Which of the following is not a JavaScript function?",
        option:["alert()", "eval()", "log()", "none"],
        answer: "none"
    },

    {
        title:"what function can be used to translate a string to an int?",
        option: ["Stringify","toFloat", "valueOf","toString"],
        answer: "toString"
    }



]

let currentQuestion = 0;

questionTitleEl.textContent = questions[0].title

choiceEl.appendChild(questions[currentQuestion].option[0])
choiceEl.appendChild(questions[currentQuestion].option[1])
choiceEl.appendChild(questions[currentQuestion].option[2])
choiceEl.appendChild(questions[currentQuestion].option[3])

function startQuiz(){
    setInterval(timerId);

    questionEl.removeAttribute("class");

    

    startScreenEl.setAttribute("class", "hide");
}


function endQuiz(){
        clearInterval(timerId);
    
        endScreenEl.removeAttribute("class");
    
        finalScoreEl.textContent = time;
    
        questionEl.setAttribute("class", "hide");
    }
    
    function saveScores() {
        //saving the value of the intial in a variable
        let initials = initalsEl.value;
    
        if (initalsEl !== "") {
            let highScore = JSON.parse(localStorage.getItem("highScores")) || [];
            
        let newScore = {score: time, initial: initials};
        highScore.push(newScore);
        localStorage.setItem("highScore", JSON.stringify(highScore));
    
        location.href ="highscores.html";
    
        }
        }
     
    submitBtn.addEventListener("click", saveScores);