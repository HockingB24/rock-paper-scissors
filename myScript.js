computerPlay = function() {
    let choice = Math.floor(parseInt(Math.random() * 3));
    switch (choice) {
        case 0: 
            return ("rock");
            break;
        case 1:
            return("paper");
            break;
        case 2:
            return("scissors");
            break;
    }
    return null;
}

getInput = function() {
    player = prompt("Type rock, paper, or scissors:");
    return(player);
}

rockPaperScissors = function(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return("tie");
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissors" && computerSelection === "rock")) {
        return("win");
    }
    else {
        return("loss");
    }
}


let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
    console.log("Game " + String(i+1));
    let playerSelection = getInput();
    let computerSelection = computerPlay();
    let result = rockPaperScissors(playerSelection, computerSelection);
    if (result === "win") {
        console.log("You win! Your " + playerSelection + " beats the computer's " + computerSelection + "!");
        playerScore++;
    }
    else if (result === "loss"){
        console.log("You lose! The computer's " + computerSelection + " beats your " + playerSelection + "!");
        computerScore++;
    }
    else {
        console.log("TIE!");
        console.log("You both played " + playerSelection + ".");
    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}

if (playerScore > computerScore) {
    console.log("YOU WIN THE GAME!")
}
else {
    console.log("You Lose.");
}

