'use strict';
// Generic
const dice = document.querySelector('.dice');
let one_score = 0;
let two_score = 0;
let dice_num = '';
let current_1 = 0;
let current_2 = 0;
// Status of Game
let isGameActive = true;

// Dice Value

const dice_roll = function () {
  dice_num = Math.trunc(Math.random() * 6) + 1;
};

// PLAYERS
const player_one = document.querySelector('.player--0');
const player_two = document.querySelector('.player--1');

// PLAYER_Socre
const playOne_score = document.querySelector('#score--0');
const playTwo_score = document.querySelector('#score--1');
// Current_Score
const playOne_current_score = document.querySelector('#current--0');
const playTwo_current_score = document.querySelector('#current--1');

playOne_score.textContent = one_score;
playTwo_score.textContent = two_score;
// Roll Dice
const roll_btn = document.querySelector('.btn--roll');

roll_btn.addEventListener('click', function () {
  if (!isGameActive) return;
  dice_roll();
  if (dice_num === 1) {
    if (player_one.classList.contains('player--active')) {
      player_two.classList.add('player--active');
      player_one.classList.remove('player--active');
      current_1 = 0;
      playOne_current_score.textContent = current_1;
    } else {
      player_two.classList.remove('player--active');
      player_one.classList.add('player--active');
      current_2 = 0;
      playTwo_current_score.textContent = current_2;
    }
  }
  dice.src = `dice-${dice_num}.png`;
  if (player_one.classList.contains('player--active')) {
    current_1 += dice_num;
    playOne_current_score.textContent = current_1;
  } else {
    current_2 += dice_num;
    playTwo_current_score.textContent = current_2;
  }
});

// Hold
const hold_btn = document.querySelector('.btn--hold');
hold_btn.addEventListener('click', function () {
  if (player_one.classList.contains('player--active')) {
    player_one.classList.remove('player--active');
    player_two.classList.add('player--active');
    one_score += current_1;
    playOne_score.textContent = one_score;
    current_1 = 0;
    playOne_current_score.textContent = current_1;
    if (one_score >= 50) {
      isGameActive = false;
      player_one.classList.add('player--winner');
    }
  } else {
    player_two.classList.remove('player--active');
    player_one.classList.add('player--active');
    two_score += current_2;
    playTwo_score.textContent = two_score;
    current_2 = 0;
    playTwo_current_score.textContent = current_2;
    if (two_score >= 50) {
      isGameActive = false;
      player_two.classList.add('player--winner');
    }
  }
});

// New_Game
const new_game = document.querySelector('.btn--new');
new_game.addEventListener('click', function () {
  one_score = 0;
  two_score = 0;
  dice_num = '';
  current_1 = 0;
  current_2 = 0;
  isGameActive = true;
  player_one.className = 'player player--0 player--active';
  player_two.className = 'player player--1';
  playOne_score.textContent = one_score;
  playTwo_score.textContent = two_score;
  playOne_current_score.textContent = current_1;
  playTwo_current_score.textContent = current_2;
  dice.src = `dice-5.png`;
});
