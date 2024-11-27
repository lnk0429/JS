'use strict';

//SCORE
let score = 20;

//HighScore
let high_score = 0;

//Random Num
let random_num = Math.trunc(Math.random() * 20) + 1;

// Again
const again = document.querySelector('.again');
again.addEventListener('click', again_game);
// AGAIN FUNCTION
function again_game() {
  document.querySelector('body').style.backgroundColor = '#222';
  random_num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
}

// Update Score
function update_score() {
  score--;
  document.querySelector('.score').textContent = score;
}

//Btn
document.querySelector('.check').addEventListener('click', check_number);

function check_number() {
  const Input = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!Input) {
      document.querySelector('.message').textContent =
        '⛔️ PLEASE INPUT VALID NUMBER';
    } else if (Input > random_num) {
      document.querySelector('.message').textContent = '😅 TOO HIGH';
      update_score();
    } else if (Input < random_num) {
      document.querySelector('.message').textContent = '🥲 TOO LOW';
      update_score();
    } else {
      document.querySelector('.message').textContent = ' 🎉YOU WIN!';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = random_num;
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > high_score) {
        high_score = score;
        document.querySelector('.highscore').textContent = high_score;
      }
      setTimeout(again_game, 3000);
    }
  } else {
    document.querySelector('.message').textContent = ' 🥶YOU LOSE!';
    document.querySelector('.number').textContent = random_num;
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#468080';
    setTimeout(again_game, 3000);
  }
}
