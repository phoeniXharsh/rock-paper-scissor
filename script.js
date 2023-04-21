const rockButton = document.getElementById("#rock");
const paperButton = document.getElementById('#paper');
const scissorButton = document.getElementById('#scissor');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const tieScore = document.getElementById('tie-score');
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";


let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

// Adding Event Listeners
function clickListener(event) {
  // Exit, if not a button was clicked
  if (event.target.tagName !== "BUTTON") {
     return;
  }
  const playerSelection = event.target.dataset.sign;
  const computerSelection = computerPlay();
  playRound(playerSelection,computerSelection);
}

document.getElementbyId("#button-container").addEventListener("click", clickListener);


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) return ROCK;
  else if (randomNumber == 1) return PAPER;
  else return SCISSOR;
}

function playRound(playerSelection, computerSelection) {
  let win =
    (computerSelection == ROCK && playerSelection == PAPER) ||
    (computerSelection == SCISSOR && playerSelection == ROCK) ||
    (computerSelection == PAPER && playerSelection == SCISSOR);

  if (win) {
    playerWin();
  } else {
    computerWin();
  }
  if (computerSelection == playerSelection) {
    tie();
  }

  if(computerWinCount == 5){
    alert("Better luck next time");
    reset();
  }
  else{
    alert("Congratulations, You Won!");
    reset();
  }

}

function playerWin(){
  playerWinCount++;
  playerScore.textContent = "Your score is: " + playerWinCount;
}

function computerWin(){
  computerWinCount++;
  computerScore.textContent = "Computer's score is: " + playerWinCount;
}

function tie(){
  tieCount++;
  playerScore.textContent = "Tie rounds: " + playerWinCount;
}

function reset() {
  playerScore.textContent = "Your Score is: 0";
  computerScore.textContent = "Computer's Score is: 0";
  tieScore.textContent = "Tie score is: 0";
}
