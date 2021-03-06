/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score.
After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores;
let roundScore;
let activePlayer;
let gamePlaying;

init();

document.getElementById('btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2. display the results
        let diceDom = document.getElementById('dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // 3. update the round score if the rolled number was not a 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
    }
});


document.getElementById('btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. add current score to global score
        scores[activePlayer] += roundScore;

        // 2. update user interface
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


        // 3. check if player one the game
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice').style.display = 'none';
            document.getElementById('player-' + activePlayer + '-panel').classList.add('winner');
            document.getElementById('player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // set current score to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // toggle active player panel
    document.getElementById('player-0-panel').classList.toggle('active');
    document.getElementById('player-1-panel').classList.toggle('active');

    // hide dice if 1 is rolled
    document.getElementById('dice').style.display = 'none';
}

document.getElementById('btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('player-0-panel').classList.remove('winner');
    document.getElementById('player-1-panel').classList.remove('winner');
    document.getElementById('player-0-panel').classList.remove('active');
    document.getElementById('player-1-panel').classList.remove('active');
    document.getElementById('player-0-panel').classList.add('active');
}
