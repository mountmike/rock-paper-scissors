// Creating some key variables
let playerSelection;
let computerSelection;
let result;

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
    } else {
        result = ("It's a draw! Play again?");
    }
};

// creating loop to enable 5 rounds of the game

function game() {
    for (let i = 0; i < 5; i++) {
      getPlayerChoice();
      getComputerChoice();
      evaluate(playerSelection, computerSelection);
      alert(result);
    }
    
}