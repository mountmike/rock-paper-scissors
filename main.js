// Creating some key variables
const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');
const rockSound = new Audio("rock.mp3");
const paperSound = new Audio("paper.mp3");
const scissorSound = new Audio("scissor.mp3");
const winSound = new Audio("win.mp3");
const loseSound = new Audio("lose.mp3");

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;


// Get input choice of Rock, Paper or Scissors from player, trigger rest of game
rockbtn.addEventListener('click', function() {
    playerSelection = "rock", rockSound.play(), playRound();
  });
paperbtn.addEventListener('click', function() {
    playerSelection = "paper", paperSound.play(), playRound();
  });
scissorsbtn.addEventListener('click', function() {
    playerSelection = "scissors", scissorSound.play(), playRound();
  });

// Computer to generate choice of Rock, Paper or Scissors

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    let randomNum;
    randomNum = Math.floor(Math.random() * 3);
    computerSelection = choices[randomNum];
    computerSelection = computerSelection.toLowerCase();
}

// Evaluate who's value is greater: user or computer using a conditional statement

function evaluate(a, b) {
    playerSelection = a;
    computerSelection = b;
    if (a === 'rock' && b === 'scissors') {
        result = 'You Win! \nRock beats Scissors';
    } else if (a === 'scissors' && b === 'paper') {
        result = ('You Win! \nScissors beats Paper');
    } else if (a === 'paper' && b === 'rock') {
        result = ('You Win! \nPaper beats Rock');
    } else if (a === 'rock' && b === 'paper') {
        result = ('You Lose! \nPaper beats Rock');
    } else if (a === 'paper' && b === 'scissors') {
        result = ('You Lose! \nScissors beats Paper');
    } else if (a === 'scissors' && b === 'rock') {
        result = ('You Lose! \nRock beats Scissors');
    } else if (a === b) {
        result = ("Looks like this round's a draw");
    }
};

// Function to output result of current round to DOM

const outputResult = function() {
    document.getElementById("roundResult").innerText = result;
}

// Function to keep count of scores

function updateScore(result) {
    if (result.includes('You Win')) {
      playerScore++;
    } else if (result.includes('You Lose')) {
      computerScore++; 
    } 
}

// Output score to HTML body

function outputScore() {
    modal.style.display = "block";
    document.getElementById("playerScore").innerText = 'You: ' + playerScore;
    document.getElementById("computerScore").innerText = 'Me: ' + computerScore;
    span.onclick = function() {
        modal.style.display = "none";
      }
}

// Announce a winner!


function declareWinner() {
    if (playerScore >= 5) {
        document.getElementById("declareWinner").innerHTML = 'You beat me!';
        winSound.play();
    } else if (computerScore >= 5) {
        document.getElementById("declareWinner").innerHTML = 'HAHA I beat you!';
        loseSound.play();
    } 

}
// enables modal to be closed
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// function to play each round and first to 3 wins

function playRound() {
    getComputerChoice();
    evaluate(playerSelection, computerSelection);
    outputResult(result);
    updateScore(result);
    outputScore();
    declareWinner();
    
}
