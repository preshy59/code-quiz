let highScores = JSON.parse(localStorage.getItem("highscores")) || [];

// Append highscores to the new page
let highScoresList = document.getElementById("highscores");
for (let i = 0; i < highScores.length; i++) {
  let newScore = document.createElement("li");
  newScore.innerHTML = `${highScores[i].initials} - ${highScores[i].score}`;
  highScoresList.appendChild(newScore);
}

// Clear the localStorage
function emptyStorage() {
  localStorage.clear();
  highScoresList.innerHTML = "";
}
// Add event listener to Clear Highscores buttons
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", emptyStorage);
