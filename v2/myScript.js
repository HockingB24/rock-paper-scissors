let playerScore = 0;
let computerScore = 0;

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

rockPaperScissors = function(e) {
    playerSelection = this.id;
    computerSelection = computerPlay();
    //Plays Rock Paper Scissors -- One round. returns tie, win, or loss; calls setScore() each round.
    currentp.innerHTML = 'You played: ' + playerSelection;
    currentc.innerHTML = 'The computer played: ' + computerSelection;
    if (playerSelection === computerSelection) {
        console.log('t');
        setScores();
        return("tie");
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissors" && computerSelection === "rock")) {

        playerScore++;
        console.log('w');
        setScores();
        return("win");
    }
    else {
        console.log('l');
        computerScore++;
        setScores();
        return("loss");
    }
}

setScores = () => {
    //Sets scores, but first checks to ensure the player nor computer have reached five points. 
    playerScoreDisp.innerHTML = playerScore;
    computerScoreDisp.innerHTML = computerScore;

    if (playerScore >= 5 || computerScore >= 5) {
        winnerDisp.innerHTML = "The Winner Is: ";

        if (playerScore > computerScore) {
            winnerDisp.innerHTML += "The Player!";
        }
        else {
            winnerDisp.innerHTML += "The Computer!";
        }

        rockBtn.removeEventListener('click', rockPaperScissors);
        paperBtn.removeEventListener('click', rockPaperScissors);
        scissorsBtn.removeEventListener('click', rockPaperScissors);

    }


}

let currentp = document.querySelector("#current-player");
let currentc = document.querySelector("#current-computer");
let playerScoreDisp = document.querySelector("#p-score-number");
let computerScoreDisp = document.querySelector("#c-score-number");
let winnerDisp = document.querySelector('#winner');

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', rockPaperScissors);

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', rockPaperScissors);

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', rockPaperScissors);
