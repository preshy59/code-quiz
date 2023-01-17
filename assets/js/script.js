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
let time = questions.length *10;
let timeId;
let score = 0;


//function that will kickstart the quiz
function startQuiz(){
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
function endQuiz(){
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
    currentQuestion = 0;
    
    questionIndex.option.forEach((option, i) => {

        let optionButton = document.createElement("button");

        optionButton.setAttribute("class", "option");
        optionButton.setAttribute("value", option);
        optionButton.appendChild(questions[currentQuestion].option[0]);
        optionButton.appendChild(questions[currentQuestion].option[1]);
        optionButton.appendChild(questions[currentQuestion].option[2]);
        optionButton.appendChild(questions[currentQuestion].option[3]);


        optionButton.onclick = () => {
            if (questionIndex.option === answer) {
                if(score < 10) {
                score ++;
                } 
                else{
                    time - 10;
                }
            }
                finalScoreEl.textContent = score;
                if (currentQuestion < 2) {
                    currentQuestion ++;
                    
                }
        }
    });
}
viewQuestion();
    
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

    //function that keep track of the time
    function timer() {
        time--;
        timeEl.textContent = time;

        if(time === 0){
            endQuiz();
        }
        
    }
     
    submitBtn.addEventListener("click", saveScores);