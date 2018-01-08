/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes.
Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost.
After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score
gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

const scores = [0, 0];
const roundScores = 0;
const activePlayer = 0;

// random rumber
const dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-' + activePlayer).textContent = dice;

// display the results
document.getElementById('current-' + activePlayer).innerHTML = dice;

// hide dice on initial game opening
document.querySelector('.dice').style.display = 'none';
