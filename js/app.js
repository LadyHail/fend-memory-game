/* Create a list that holds cards */
let cards = ['fa-blind', 'fa-balance-scale', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];

/* Duplicate cards, so there is one pair of each card */
cards = cards.concat(cards);

/* Find element that contains deck */
const deck = document.querySelector('.deck');

/* Create array to store opened cards */
openedCards = new Array();

/* Moves counter */
let counter = 0;

const stars = document.getElementsByClassName('fa-star');

let startTime = 0;
let endTime = 0;
let currTime = 0;

/* Display cards on the page */
createDeck(shuffle(cards));

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

/* Loop through each card and create its HTML, then add each card to the page */
function createDeck(cards) {
    cards.forEach(function (className) {
        let card = document.createElement('li');
        card.className = 'card';
        let icon = document.createElement('i');
        icon.className = 'fa ' + className;
        card.appendChild(icon);
        deck.appendChild(card);
    });
};

/* Listen for 'click' event on the deck */
deck.addEventListener('click', function (e) {
    const target = e.target;
    if (target.className === 'card') {
        startTimer();
        target.className = 'card open show';
        storeOpenCard(target);
        checkMatching();
        countMoves();
        countStars();
        if (isDone()) {
            stopTimer();
            finish();
        }
    }
});

function startTimer() {
    if (startTime === 0) {
        startTime = Date.now();
        currentTime();
    }
};

function stopTimer() {
    endTime = Date.now();
    clearInterval(currTime);
};

function storeOpenCard(card) {
    if (openedCards.length < 2) {
        openedCards.push(card);
    }
    else {
        openedCards.splice(0, openedCards.length);
        openedCards.push(card);
    }
};

function checkMatching() {
    if (openedCards.length === 2) {
        const card1 = openedCards[0];
        const card2 = openedCards[1];
        const isPair = card1.querySelector('i').className === card2.querySelector('i').className;
        if (isPair) {
            card1.className = 'card match';
            card2.className = 'card match';
        }
        else {
            setTimeout(function () {
                card1.className = 'card';
                card2.className = 'card';
            }, 150);
        }
    }
};

function countMoves() {
    counter++;
    const showMoves = document.querySelector('.moves');
    showMoves.textContent = counter;
};

function countStars() {
    if (counter === 32) {
        stars[2].remove();
    }
    else if (counter === 38) {
        stars[1].remove();
    }
};

/* Check if all cards are matched */
function isDone() {
    const cards = deck.querySelectorAll('li');
    let allMatch = true;
    for (let card of cards) {
        if (card.className !== 'card match') {
            allMatch = false;
            break;
        }
    };
    if (allMatch) {
        return true;
    }
};

function finish() {
    setTimeout(function () {
        const playAgain = window.confirm('Well done!\nMoves: ' + counter + '\nStars: ' + stars.length + '\nTime: ' + deltaTime() + ' seconds!\nDo you want to play again?');
        if (playAgain) {
            location = location;
        }
    }, 10);

};

/* Listen for 'click' on restart button */
document.querySelector('.restart').addEventListener('click', function () {
    location = location;
});

/* Returns time needed to complete the game */
function deltaTime() {
    let deltaTime = Math.round((endTime - startTime) / 1000);
    return deltaTime;
};

/* Display timer on the web */ 
function currentTime() {
    currTime = setInterval(function () {
        let time = Math.round((Date.now() - startTime) / 1000);
        document.querySelector('.timer').textContent = time + ' seconds';
    }, 1000);
};