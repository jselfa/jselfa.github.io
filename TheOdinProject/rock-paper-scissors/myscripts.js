let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let round = 1;

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    console.log("Computer choices: " + choices[computerChoice]);
    return choices[computerChoice];
}

function playerPlay() {
    let playerChoice;
    do {
        playerChoice = prompt("Choice Rock, Paper or Scissors: ");
        playerChoice = playerChoice.toLowerCase();
    } while (!choices.includes(playerChoice));
    console.log("Player choice: " + playerChoice);
    return playerChoice;
}

function playRound(){
    let playerChoice = playerPlay();
    let computerChoice = computerPlay();
    const winner = checkRound(playerChoice, computerChoice);
    document.getElementById("computer").innerHTML = "Computer: " + computerChoice;
    document.getElementById("player").innerHTML = "You: " + playerChoice;
    return winner;
}

function checkRound(playerChoice, computerChoice) {
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')){
            console.log("Player wins round " + round);
            return "player";
        }else if (playerChoice === computerChoice){
            console.log("Tie");
            return "Tie";
        }else{
            console.log("Computer wins round " + round);
            return "computer";
        }
}

function score(winner){
    if(winner === 'player'){
        playerScore +=1;
        if(playerScore >= 5){
            console.log("You WIN!!")
        }
    }else if(winner == 'computer'){
        computerScore +=1;
        if(computerScore >= 5){
            console.log("You LOSE!!");
        }
    }
    console.log("\nPlayer Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}

function game() {
    if(round == 1){
        console.log("----------------");
        console.log("The Game Begins");
        console.log("----------------");
        console.log("ROUND " + round)
        console.log("----------------");
    }else{
        console.log("----------------");
        console.log("ROUND " + round)
        console.log("----------------");

    }

    let winner = playRound();
    score(winner);
    round++;
}