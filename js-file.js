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
    let playerChoice;

    if (playerSelection.toLowerCase() === "rock") {
        playerChoice = 0;
    } else if (playerSelection.toLowerCase() === "paper") {
        playerChoice = 1;
    } else if (playerSelection.toLowerCase() === "scissor") {
        playerChoice = 2;
    }

    if (computerSelection === playerChoice) {
        console.log("DRAW");
        draw += 1;
    } else if (computerSelection === 0 && playerChoice === 2){
        console.log("You lose. Scissor loses to Rock");
        playerScore = 0;
    } else if (computerSelection === 2 && playerChoice === 0){
        console.log("You win. Rock beats Scissor");
        playerScore = 2;
    } else if (computerSelection === 0 && playerChoice === 1){
        console.log("You win. Paper beats Rock");
        playerScore = 2;
    } else if (computerSelection === 1 && playerChoice === 0){
        console.log("You lose. Rock loses to Paper");
        playerScore = 0;
    } else if (computerSelection === 1 && playerChoice === 2){
        console.log("You win. Scissor beats Paper");
        playerScore = 2;
    } else if (computerSelection === 2 && playerChoice === 1){
        console.log("You lose. Paper loses to Scissor");
        playerScore = 0;
    }
}

// function game() {
//     while (rounds < 5) {
//         for (let i = 0; i < 5; i++) {
//             let playerSelection = prompt("Please enter rock, paper, or scissor");
//             if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissor"){
//                 console.log('Please enter "rock", "paper", or "scissor"')
//                 let playerSelection = prompt("Please enter rock, paper, or scissor");
//             }
            

//             let computerSelection = getComputerChoice();
//             playRound(playerSelection, computerSelection);
            
//             if (playerScore < computerScore) {
//                 losses += 1;
//                 rounds += 1;
//             } else if (playerScore > computerScore) {
//                 wins += 1;
//                 rounds += 1;
//             } else {
//                 rounds += 1;
//             }
//         }  
//     }

//     if (wins > losses) {
//         console.log(`You have won against the computer. Wins: ${wins} / Losses: ${losses} / Draws: ${draw}`);
//     } else if (wins < losses) {
//         console.log(`You have lost against the computer. Wins: ${wins} / Losses: ${losses} / Draws: ${draw}`);
//     } else if (wins === losses) {
//         console.log(`You have drew against the computer. Wins: ${wins} / Losses: ${losses} / Draws: ${draw}`);
//     }
// }
document.getElementById("rock-btn").addEventListener("click", () => {
    playRound("rock", getComputerChoice)
    console.log(0);
});

document.getElementById("rock-btn").addEventListener("click", () => {
    playRound("rock", getComputerChoice)
    console.log(0);
});

document.getElementById("rock-btn").addEventListener("click", () => {
    playRound("rock", getComputerChoice)
    console.log(0);
});
