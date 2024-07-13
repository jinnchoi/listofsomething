// Get elements
const scoreElement = document.getElementById("score");
const resetScoreButton = document.getElementById("reset-score-btn");

// Local storage key
const SCORE_KEY = "score";

// Variable to store the score
let score = 0;

// Save score to local storage
function saveScore() {
    localStorage.setItem(SCORE_KEY, score);
}

// Increment the score
function incrementScore() {
    score++;
    updateScoreDisplay();
    saveScore();
}

// Update score display
function updateScoreDisplay() {
    scoreElement.textContent = score;
}

// Reset score
function resetScore() {
    score = 0;
    updateScoreDisplay();
    saveScore();
}

// Event listener for resetting score
resetScoreButton.addEventListener("click", resetScore);

// Load saved score
const savedScore = localStorage.getItem(SCORE_KEY);
if (savedScore !== null) {
    score = parseInt(savedScore);
    updateScoreDisplay();
}
