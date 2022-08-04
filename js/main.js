function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    let tally = 0;
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) { 
        console.log('Tie Game!');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log('You Lose! Paper beats Rock');
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log('You Win! Rock beats Scissors!');
        tally+=1
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('You Win! Paper beats Rock');
        tally+=1
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log('You Lose! Scissors beats Paper!');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('You Lose! Rock beats Scissors');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('You Win! Scissors beats Paper!');
        tally+=1
    } else {
        console.log('Invalid input! Please put Rock, Paper, or Scissors');
    }

    return tally;
}

let game = () => {
    playerWins = 0
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Choose Rock, Paper, or Scissors');
        playerWins = playRound(playerChoice, getComputerChoice());
    }

    if (5 - playerWins <= 2) {
        console.log("You won! You beat the computer!");
    } else {
        console.log("Sorry! You lost to the computer :(");
    }
}

console.log(getComputerChoice())
const playerSelection = 'rock';
const computerSelection = getComputerChoice();

game();