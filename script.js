
var randomInteger = Math.ceil(Math.random() * 100)
console.log("Random Number is " + randomInteger);

var userGuess = document.querySelector('#guess-input');
var lastGuess = document.querySelector('.last-guess-number');
var lastGuessText = document.querySelector('.text-guess');
var guessButton = document.querySelector('.guess-button');
var programResponse = document.querySelector('.response');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var min = 1;
var max = 100;

guessButton.addEventListener('click', checkRange);

function checkRange () {
    console.log(userGuess.value);
    var parseGuess = parseInt(userGuess.value)
    if (parseGuess < max && parseGuess > min) {
    lastGuessText.innerText = 'Your last guess was';
    lastGuess.innerText = userGuess.value;
    validGuess();
  } else if (parseGuess > max) {
    lastGuessText.innerText = 'Maximum Guess is 100.'
    lastGuess.innerText = '--'
    programResponse.innerText = 'That is too HIGH!'
  } else if (parseGuess <= min) {
    lastGuessText.innerText = 'Minimum Guess is 1.'
    lastGuess.innerText = '--'
    programResponse.innerText = 'That is too LOW!'
  } else {
    lastGuessText.innerText = 'That is NOT a Number'
    lastGuess.innerText = ''
    programResponse.innerText = ''
  } 
}

function validGuess() {
  var parseGuess = parseInt(userGuess.value)
  if (parseGuess > randomInteger) {
    programResponse.innerText = 'That is too HIGH!'
  } else if (parseGuess < randomInteger) {
    programResponse.innerText = 'That is too LOW!'
  } else {programResponse.innerText = 'BOOM!'}
  };

clearButton.addEventListener('click', function() {
  userGuess.value = '';
  lastGuessText.innerText = 'Guess again';
  lastGuess.innerText = '';
  programResponse.innerText = '';
}); 

resetButton.addEventListener('click', function() {
  makeRandom();
  userGuess.value = '';
  lastGuessText.innerText = 'Guess a Number';
  lastGuess.innerText = '';
  programResponse.innerText = '';
});

function makeRandom() {
  randomInteger = Math.ceil(Math.random() * 100)
  console.log(randomInteger);
};




