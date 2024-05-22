// Initialize score
let score = JSON.parse(localStorage.getItem("Score")) || {
  win: 0,
  lost: 0,
  tie: 0,
};

// Function to display the current score
function displayScore() {
  return `Score: Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
}

// Function to update the UI with the current game state
function updateUI(userMove, computerMove, result) {
  document.querySelector("#user-move").innerText = userMove
    ? `You have chosen ${userMove}`
    : "";
  document.querySelector("#computer-move").innerText = computerMove
    ? `Computer choice is ${computerMove}`
    : "";
  document.querySelector("#result").innerText = result || "";
  document.querySelector("#score").innerText = displayScore();
}

// Function to generate a random computer choice
function generateComputerChoice() {
  const choices = ["Bat", "Ball", "Stump"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the result of the game
function getResult(userMove, computerMove) {
  if (userMove === computerMove) {
    score.tie++;
    return "It's a tie";
  }
  if (
    (userMove === "Bat" && computerMove === "Ball") ||
    (userMove === "Ball" && computerMove === "Stump") ||
    (userMove === "Stump" && computerMove === "Bat")
  ) {
    score.win++;
    return "User won.";
  }
  score.lost++;
  return "Computer has won";
}

// Function to handle game logic
function playGame(userMove) {
  const computerMove = generateComputerChoice();
  const result = getResult(userMove, computerMove);
  localStorage.setItem("Score", JSON.stringify(score));
  updateUI(userMove, computerMove, result);
}

// Function to reset the game score
function resetGame() {
  localStorage.clear();
  score = { win: 0, lost: 0, tie: 0 };
  updateUI();
}

// Initialize UI with current score
updateUI();
