let randomNumber = parseInt((Math.random() * 100) + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let previousGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    //! Check UserInput is valid or not
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        previousGuess.push(guess);
        if (numGuess > 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Actual Number ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //! The guess value is right wrong
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO LOW`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO HIGH`);
    }
}

function displayGuess(guess) {
    //! Clean Up & Updating the UserInput 
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    //! DOM manipulation done by this method
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    //! End the Game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    //! Start the new game
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', (e) => {
        randomNumber = parseInt((Math.random() * 100) + 1);
        previousGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}