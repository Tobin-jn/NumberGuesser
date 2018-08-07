//=====Global Variables=====//
var guessBtn = document.querySelector('.guess-btn');
var clearBtn = document.querySelector('.clear-btn');
var resetBtn = document.querySelector('.reset-btn');
var setBtn = document.querySelector('.setMinMax');
var userInput = document.querySelector('.user-input');
var minInput = document.querySelector('.min-input');
var maxInput = document.querySelector('.max-input');
var counter = document.querySelector('.counter');
var count = 0;
var randomNumber = 0;


//=====Event Listeners=====//

guessBtn.addEventListener('click', makeGuess);
clearBtn.addEventListener('click', clearInput);
setBtn.addEventListener('click', getRandomInteger);
userInput.addEventListener('keyup', enableBtn);
maxInput.addEventListener('keyup', enableMinBtn);
resetBtn.addEventListener('click', resetAll);


//=====Functions=====//

function makeGuess(e) {
  e.preventDefault();
  var lastGuess = document.querySelector(".last-guess");
  var guess = parseInt(userInput.value);
  document.querySelector('.text-your-guess').innerHTML = "Your guess was";
  lastGuess.innerText = guess;
  countIncrease();
  checkGuess();
}

function countIncrease() {
  count++
  counter.innerText = count;
}

function clearInput() {
  userInput.value = ''; 
}

function checkGuess() {
  var userMin = parseInt(minInput.value);
  var userMax = parseInt(maxInput.value);
  var guess = parseInt(userInput.value);
  if (guess <= userMin || guess >= userMax) {
  document.querySelector('.correct').innerHTML = "Outside the Min/Max!! Guess Again!"
  } else if (guess < randomNumber) {
    document.querySelector('.correct').innerHTML = "Too Low, Guess Again!"
  } else if (guess > randomNumber) {
    document.querySelector('.correct').innerHTML = "Too High, Guess Again!"
  } else {document.querySelector('.correct').innerHTML = "You did it!!"} 
}


function getRandomInteger() {
  var userMin = parseInt(minInput.value)
  var userMax = parseInt(maxInput.value)
  randomNumber = Math.floor(Math.random() * (userMax - userMin + 1)) + userMin;
  console.log('Random Number is ' + randomNumber);
}

function enableBtn() {
  if (userInput.value !== '') {
    guessBtn.disabled = false;
    clearBtn.disabled = false;
    guessBtn.classList.add('guess-btn-hover');
    clearBtn.classList.add('clear-btn-hover');
    resetBtn.classList.add('reset-btn-hover');
  }
}

function enableMinBtn() {
  if (minInput.value !== '' && maxInput.value !== '') {
    setBtn.disabled = false;
  }
}

function resetAll() {
  userInput.value = '';
  minInput.value = '';
  maxInput.value = '';
  count = 0;
  counter.innerText = count;
  guessBtn.disabled = true;
  clearBtn.disabled = true;
  setBtn.disabled = true;
  document.querySelector('.last-guess').innerHTML = '--';
  document.querySelector('.correct').innerHTML = '';
  guessBtn.classList.remove('guess-btn-hover');
  clearBtn.classList.remove('clear-btn-hover');
  resetBtn.classList.remove('reset-btn-hover');
}












































// var randomInteger = Math.ceil(Math.random() * 100)
// console.log("Random Number is " + randomInteger);

// var userGuess = document.querySelector('#guess-input');
// var lastGuess = document.querySelector('.last-guess-number');
// var lastGuessText = document.querySelector('.text-guess');
// var guessButton = document.querySelector('.guess-button');
// var programResponse = document.querySelector('.response');
// var clearButton = document.querySelector('.clear-button');
// var resetButton = document.querySelector('.reset-button');
// var min = 1;
// var max = 100;

// guessButton.addEventListener('click', checkRange);

// function checkRange () {
//     console.log(userGuess.value);
//     var parseGuess = parseInt(userGuess.value)
//     if (parseGuess < max && parseGuess > min) {
//     lastGuessText.innerText = 'Your last guess was';
//     lastGuess.innerText = userGuess.value;
//     validGuess();
//   } else if (parseGuess > max) {
//     lastGuessText.innerText = 'Maximum Guess is 100.'
//     lastGuess.innerText = '--'
//     programResponse.innerText = 'That is too HIGH!'
//   } else if (parseGuess <= min) {
//     lastGuessText.innerText = 'Minimum Guess is 1.'
//     lastGuess.innerText = '--'
//     programResponse.innerText = 'That is too LOW!'
//   } else {
//     lastGuessText.innerText = 'That is NOT a Number'
//     lastGuess.innerText = ''
//     programResponse.innerText = ''
//   } 
// }

// function validGuess() {
//   var parseGuess = parseInt(userGuess.value)
//   if (parseGuess > randomInteger) {
//     programResponse.innerText = 'That is too HIGH!'
//   } else if (parseGuess < randomInteger) {
//     programResponse.innerText = 'That is too LOW!'
//   } else {programResponse.innerText = 'BOOM!'}
//   };

// clearButton.addEventListener('click', function() {
//   clearInputFields();
//   fillText();
//   lastGuessText.innerText = 'Guess again';
// }); 

// resetButton.addEventListener('click', function() {
//   makeRandom();
//   fillText();
//   lastGuessText.innerText = 'Guess a Number';
 
// });

// function makeRandom() {
//   randomInteger = Math.ceil(Math.random() * 100)
//   console.log(randomInteger);
// };

// function fillText() {
//   userGuess.value = '';
//   lastGuess.innerText = '';
//   programResponse.innerText = '';
// }









