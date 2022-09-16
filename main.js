// Creating some key variables
let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;

// Get input choice of Rock, Paper or Scissors from player

function getPlayerChoice() {
    playerSelection = prompt('Chose your weapon! Rock, Paper, or Scissors.');
    playerSelection = playerSelection.toLowerCase();
}

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
        result = 'You Win! Rock beats Scissors';
    } else if (a === 'scissors' && b === 'paper') {
        result = ('You Win! Scissors beats Paper');
    } else if (a === 'paper' && b === 'rock') {
        result = ('You Win! Paper beats Rock');
    } else if (a === 'rock' && b === 'paper') {
        result = ('You Lose! Paper beats Rock');
    } else if (a === 'paper' && b === 'scissors') {
        result = ('You Lose! Scissors beats Paper');
    } else if (a === 'scissors' && b === 'rock') {
        result = ('You Lose! Rock beats Scissors');
    } else if (a === b) {
        result = ("It's a draw! Play again?");
    } else {
        result = ("Learn to spell dIcKhEAd")
    }
};

// Keep track of scores

function updateScore(result) {
    if (result.includes('You Win')) {
      playerScore++;
    } else if (result.includes('You Lose')) {
      computerScore++; 
    } 
}

// creating loop to enable 5 rounds of the game

function playGame() {
      getPlayerChoice();
      getComputerChoice();
      evaluate(playerSelection, computerSelection);
      alert(result);
      updateScore(result);
      outputScore();
      declareWinner();
}

// Output score to HTML body

function outputScore() {
    document.getElementById("playerScore").innerHTML = 'Your Score: ' + playerScore;
    document.getElementById("computerScore").innerHTML = 'My Score: ' + computerScore;
}

// Announce a winner!

function declareWinner() {
    if (playerScore >= 3) {
    alert('You beat me MOTHERFUCKER!')
    } else if (computerScore >= 3) {
        alert('HAHA FUCK YOU DUMB CUNT! I WIN')
    } else {

    }
}