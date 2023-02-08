let playerScore = 1;
let computerScore = 1;
let rounds = 0;
let wins = 0;
let losses = 0;
let draw = 0;

function getComputerChoice() {
    return Math.floor(((Math.random() * 3)));
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        playerSelection = 0;
    } else if (playerSelection == "paper") {
        playerSelection = 1;
    } else if (playerSelection == "scissor") {
        playerSelection = 2;
    }

    if (computerSelection === playerSelection) {
        document.getElementById("result").innerHTML = "DRAW";
        draw += 1;
    } else if (computerSelection === 0 && playerSelection === 2){
        document.getElementById("result").innerHTML = "You lose. Scissor loses to Rock";
        playerScore = 0;
    } else if (computerSelection === 2 && playerSelection === 0){
        document.getElementById("result").innerHTML = "You win. Rock beats Scissor";
        playerScore = 2;
    } else if (computerSelection === 0 && playerSelection === 1){
        document.getElementById("result").innerHTML = "You win. Paper beats Rock";
        playerScore = 2;
    } else if (computerSelection === 1 && playerSelection === 0){
        document.getElementById("result").innerHTML = "You lose. Rock loses to Paper";
        playerScore = 0;
    } else if (computerSelection === 1 && playerSelection === 2){
        document.getElementById("result").innerHTML = "You win. Scissor beats Paper";
        playerScore = 2;
    } else if (computerSelection === 2 && playerSelection === 1){
        document.getElementById("result").innerHTML = "You lose. Paper loses to Scissor";
        playerScore = 0;
    }

    if (playerScore < computerScore) {
        losses += 1;
        rounds += 1;
    } else if (playerScore > computerScore) {
        wins += 1;
        rounds += 1;
    } else {
        rounds += 1;
    } 

    document.getElementById("current-score").innerHTML = `Rounds: ${rounds} / Wins: ${wins} / Losses: ${losses} / Draws: ${draw}`;

    if (rounds == 5) {
        if (playerScore > computerScore) {
            document.getElementById("final-result").innerHTML = `You have won against the computer!`
        }
        else if (playerScore < computerScore) {
            document.getElementById("final-result").innerHTML = `You have lost against the computer!`
        }
    }
}

function playRock() {
    playRound("rock", getComputerChoice())
}

function playPaper() {
    playRound("paper", getComputerChoice())
}

function playScissors() {
    playRound("scissor", getComputerChoice())
}


function game() {
    document.getElementById("rock-btn").addEventListener("click", () => {
        playRock();
    });
    
    document.getElementById("paper-btn").addEventListener("click", () => {
        playPaper()
    });
    
    document.getElementById("scissors-btn").addEventListener("click", () => {
        playScissors()
    });
}

game();
