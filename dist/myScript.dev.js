"use strict";

var playerScore = 0;
var computerScore = 0;

computerPlay = function computerPlay() {
  var choice = Math.floor(parseInt(Math.random() * 3));

  switch (choice) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }

  return null;
};

rockPaperScissors = function rockPaperScissors(e) {
  playerSelection = this.id;
  computerSelection = computerPlay(); //Plays Rock Paper Scissors -- One round. returns tie, win, or loss; calls setScore() each round.

  currentp.innerHTML = 'You played: ' + playerSelection;
  currentc.innerHTML = 'The computer played: ' + computerSelection;

  if (playerSelection === computerSelection) {
    console.log('t');
    setScores();
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log('w');
    setScores();
    return "win";
  } else {
    console.log('l');
    computerScore++;
    setScores();
    return "loss";
  }
};

setScores = function setScores() {
  //Sets scores, but first checks to ensure the player nor computer have reached five points. 
  playerScoreDisp.innerHTML = playerScore;
  computerScoreDisp.innerHTML = computerScore;

  if (playerScore >= 5 || computerScore >= 5) {
    winnerDisp.innerHTML = "The Winner Is: ";
    reloadBtn.style.display = 'block';
    reloadBtn.innerHTML = "Play Again!";

    if (playerScore > computerScore) {
      winnerDisp.innerHTML += "The Player!";
    } else {
      winnerDisp.innerHTML += "The Computer!";
    }

    rockBtn.removeEventListener('click', rockPaperScissors);
    paperBtn.removeEventListener('click', rockPaperScissors);
    scissorsBtn.removeEventListener('click', rockPaperScissors);
  }
};

function rise(e) {
  this.classList.add('clicked');
  this.addEventListener('transitionend', removeTransition);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip if not transform

  this.classList.remove('clicked');
}

var currentp = document.querySelector("#current-player");
var currentc = document.querySelector("#current-computer");
var playerScoreDisp = document.querySelector("#p-score-number");
var computerScoreDisp = document.querySelector("#c-score-number");
var winnerDisp = document.querySelector('#winner');
var reloadBtn = document.querySelector('#reloader');
reloadBtn.style.display = 'none';
reloadBtn.addEventListener('click', reload = function reload() {
  location = location;
});
var btn = document.querySelectorAll('.btn');
btn.forEach(function (btn) {
  return btn.addEventListener("click", rise);
});
var rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', rockPaperScissors);
var paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', rockPaperScissors);
var scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', rockPaperScissors);