let randomNumber = parseInt(Math.random() * 100) + 1;
const submit = document.querySelector("#subt");
const input = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
  submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let guess = parseInt(input.value);
      validGuess(guess);
  })}

function validGuess(guess) {
   if(guess < 1 || guess > 100 || isNaN(guess)) {
     alert("enter a valid number between 1 and 100");
   } else {
   prevGuess.push(guess);
      if(numGuess > 10) {
        displayGuess(guess);
        displayMessage(`GameOver! Number was ${randomNumber}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
   }
}

function checkGuess(guess) {
  if(guess === randomNumber) {
    displayMessage(` You guessed it right. ${randomNumber} is`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Too low!`);
  } else if (guess > randomNumber) {
     displayMessage("Too high!")
  }
}

function displayGuess(guess) {
  input.value = '';
  guessSlot.innerHTML += `${guess}, `;
   console.log(guess);
  console.log(prevGuess);
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
  input.value = '';
  input.setAttribute('disabled','');
  p.classList.add("button");
  p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  let newGame = document.querySelector("#newGame");
  newGame.addEventListener("click",(e)=>{
    e.preventDefault();
    randomNumber = parseInt(Math.random() * 100) + 1;
     prevGuess = [];
     numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}