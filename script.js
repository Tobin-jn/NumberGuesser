var userGuess = document.querySelector('#guess-input');
var lastGuess = document.querySelector('.last-guess-number');
var lastGuessText = document.querySelector('.text-guess');
var guessButton = document.querySelector('.guess-button');
var programResponse = document.querySelector('.response');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var min = document.querySelector('#min-range');
var max = document.querySelector('#max-range');
var rangeButton = document.querySelector('#range-enter')

rangeButton.addEventListener('click', function() {
var randomInteger = Math.ceil(Math.random() * parseInt(max.value));
console.log("Random Number is " + randomInteger)
});

//Random Integer has local scope now and is not recognized in subsequent functions...


guessButton.addEventListener('click', checkRange);

function checkRange () {
    console.log(userGuess.value);
    var parseGuess = parseInt(userGuess.value)
    var parseMin = parseInt(min.value)
    var parseMax =parseInt(max.value)
    if (parseGuess < parseMax && parseGuess > parseMin) {
    lastGuessText.innerText = 'Your last guess was';
    lastGuess.innerText = userGuess.value;
    validGuess();
  } else if (parseGuess > parseMax) {
    lastGuessText.innerText = 'Maximum Guess is 100.'
    lastGuess.innerText = '--'
    programResponse.innerText = 'That is too HIGH!'
  } else if (parseGuess < parseMin) {
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
  randomInteger= Math.ceil(Math.random() * 100)
  console.log(randomInteger);
};

