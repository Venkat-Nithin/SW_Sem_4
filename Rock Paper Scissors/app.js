const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const tiesDisplay = document.getElementById('ties');

let userChoice;
let computerChoice;
let result;
let wins = 0;
let losses = 0;
let ties = 0;

const winSound = new Audio('all-i-do-is-win.mp3');
const loseSound = new Audio('looser-01_6HvlTvd.mp3');
const drawSound = new Audio('mario-party-draw-voice.mp3');


possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    // Add animation
    e.target.classList.add('highlight');
    setTimeout(() => {
      e.target.classList.remove('highlight');
    }, 500);

    generateComputerChoice();
    getResult();
    updateScore();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'It’s a draw!';
    ties++;
    drawSound.play();
  } else if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'rock')
  ) {
    result = 'You win!';
    wins++;
    winSound.play();
  } else {
    result = 'You lose!';
    losses++;
    loseSound.play();
  }
  resultDisplay.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

function updateScore() {
  winsDisplay.innerHTML = wins;
  lossesDisplay.innerHTML = losses;
  tiesDisplay.innerHTML = ties;
}
