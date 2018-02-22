/*
YOUR 3 CHALLENGES:

1. A player loses his ENTIRE score when he rolls two 6 in a row. After that it's the next player's turn.
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score
of 100. (Hint: You can read that value with the .value method in JavaScript.)

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them
is a 1. (Hint: You will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

let scores;
let roundScore;
let winningScore;
let activePlayer;
let gamePlaying;

init();

let lastDice;

// roll the dice
document.getElementById('btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2. display the results
        let diceDom = document.getElementById('dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // 3. Update the round score if the rolled number was not a 1
        if (dice === 6 && lastDice === 6) {
            // player loses score
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            // add score
            roundScore += dice;
            document.getElementById('current-' + activePlayer).innerHTML = roundScore;
        } else {
            // next player
            nextPlayer();
        }

        lastDice = dice;
    }
});

document.getElementById('btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. add current score to global score
        scores[activePlayer] += roundScore;

        // 2. update user interface
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        let input = document.getElementById('final-score').value;

        // undefined, 0, null or "" are coerced to false, anything else is coerced to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // 3. check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
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
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

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