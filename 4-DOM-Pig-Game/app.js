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

// hide dice on initial game opening
document.getElementById('dice').style.display = 'none';

// set initial dice values to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// roll the dice
document.getElementById('btn-roll').addEventListener('click', function() {

  // 1. random number
  const dice = Math.floor(Math.random() * 6) + 1;

  // 2. display the results
  const diceDom = document.getElementById('dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';

  // 3. update round score IF the rolled number was NOT a 1

});




// display the results in current player box
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.getElementById('current-' + activePlayer).innerHTML = dice;
