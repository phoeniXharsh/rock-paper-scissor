const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");
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
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
}

rockButton.addEventListener("click", clickListener);
paperButton.addEventListener("click", clickListener);
scissorButton.addEventListener("click", clickListener);



function getComputerChoice() {
  let rps = [ROCK, PAPER, SCISSOR];
  let randomNumber = Math.floor(Math.random() * 3);
  return rps[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  let win =
    (computerSelection == ROCK && playerSelection == PAPER) ||
    (computerSelection == SCISSOR && playerSelection == ROCK) ||
    (computerSelection == PAPER && playerSelection == SCISSOR);

  if (computerSelection == playerSelection) {
    tie();
  }
  if (win) {
    playerWin();
  } else {
    computerWin();
  }

  // if(computerWinCount == 5){
  //   alert("Better luck next time");
  //   reset();
  // }
  // else{
  //   alert("Congratulations, You Won!");
  //   reset();
  // }

}

function playerWin(){
  playerWinCount++;
  playerScore.innerText = "Your score is: " + playerWinCount;
}

function computerWin(){
  computerWinCount++;
  computerScore.innerText= "Computer's score is: " + computerWinCount;
}

function tie(){
  tieCount++;
  tieScore.innerText = "Tie rounds: " + tieCount;
}

function reset() {
  playerScore.textContent = "Your Score is: 0";
  computerScore.textContent = "Computer's Score is: 0";
  tieScore.textContent = "Tie score is: 0";
}
