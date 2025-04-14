'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // When there is no input
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number🎉';
    displayMessage('Correct Number🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High🤯' : 'Too Low😟';
      displayMessage(guess > secretNumber ? 'Too High🤯' : 'Too Low😟');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game😭';
      document.querySelector('.score').textContent = '0';
    }
  }

  // When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High🤯';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game😭';
  //       document.querySelector('.score').textContent = '0';
  //     }
  //     // When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low😟';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game😭';
  //       document.querySelector('.score').textContent = '0';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
