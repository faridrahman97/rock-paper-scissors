function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    let finalString = ''
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) { 
        finalString = 'Tie Game!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        finalString = 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        finalString = 'You Win! Rock beats Scissors!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        finalString = 'You Win! Paper beats Rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        finalString = 'You Lose! Scissors beats Paper!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        finalString = 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        finalString = 'You Win! Scissors beats Paper!';
    } else {
        finalString = 'Invalid input! Please put Rock, Paper, or Scissors';
    }

    return finalString;
}

console.log(getComputerChoice())
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));