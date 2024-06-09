// Players Input from process.argv and we transform it to lower case letters
const playerMove = process.argv[2].toLowerCase();

// creating a random number for the Computer Move
const computerNum = Math.floor(Math.random() * 3);

let computerMove;

// Assign the Number to one of the possible moves (Rock, paper or scissors)
if (computerNum === 0 ) {
    computerMove = 'rock';
} else if (computerNum === 1 ) {
    computerMove = 'paper';
} else {
    computerMove = 'scissors';
}

//Telling the Code which funtions to use depending on the Players Input or printing an invalid Text incase the players input is wrong
if (playerMove === 'paper') {
    paperGame(playerMove,computerMove);
} else if (playerMove === 'rock') {
    rockGame(playerMove, computerMove);
} else if (playerMove === 'scissors') {
    scissorsGame(playerMove, computerMove);
} else {
    console.log('Invalid Input, please try again with either: Rock, Paper or Scissors.');
}

// Funtion if player chooses Paper
function paperGame(playerMove, computerMove) {
    if (playerMove === 'paper' && computerMove === 'paper') {
        console.log(`Computer pulled Paper too! It's a tie...Please play again.`);
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        console.log('Computer pulled Scissors...you lost! Try again.');
    } else {
        console.log('Computer pulled Rock...you Won! Good Game.');
    }
}

// Funtion if player chooses Rock
function rockGame(playerMove, computerMove) {
    if (playerMove === 'rock' && computerMove === 'rock') {
        console.log(`Computer pulled Rock too! It's a tie...Please play again.`);
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        console.log('Computer pulled Paper...you lost! Try again.');
    } else {
        console.log('Computer pulled Scissors...you Won! Good Game.');
    }
}

// Funtion if player chooses Scissors
function scissorsGame(playerMove, computerMove) {
    if (playerMove === 'scissors' && computerMove === 'scissors') {
        console.log(`Computer pulled Scissors too! It's a tie...Please play again.`);
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        console.log('Computer pulled Rock...you lost! Try again.');
    } else {
        console.log('Computer pulled Paper...you Won! Good Game.');
    }
}
