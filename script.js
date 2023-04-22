const rockButton = document.getElementById('rock');
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const tieScore = document.getElementById('tie-score');
const finalResult = document.getElementById('final-result');
const playAgain = document.getElementById("play-again");


let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

// Adding Event Listeners
function clickListener(event) {
  const playerSelection = event.target.id;
  console.log(event.target.id);
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  playRound(playerSelection,computerSelection);
}

// playAgain.addEventListener("click", reset());

rockButton.addEventListener("click", clickListener);
paperButton.addEventListener("click", clickListener);
scissorButton.addEventListener("click", clickListener);



function getComputerChoice() {
  let rps = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  return rps[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    computerWin();
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWin();
  } else if (playerSelection === computerSelection) {
    tie();
  }
  if(playerWinCount==5){
    finalResult.textContent = "Congratulations! You Won. Yay!";
  }
  else if(computerWinCount== 5){
    finalResult.textContent = "You lose. Better luck next time.";
  }
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
  playerScore.innerText = "Your Score is: 0";
  computerScore.innerText = "Computer's Score is: 0";
  tieScore.innerText = "Tie score is: 0";
  finalResult.innerText = "";
  playerWinCount = 0;
  computerWinCount = 0;
  tieCount = 0;
}
