var randomInteger = Math.ceil(Math.random() * 100)
console.log("Random Number is " + randomInteger);

var userGuess = document.querySelector('#guess-input');
var lastGuess = document.querySelector('.last-guess-number');
var lastGuessText = document.querySelector('.text-guess');
var guessButton = document.querySelector('.guess-button');
var programResponse = document.querySelector('.response');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var min = 1
var max = 100
// var parsed = parseInt(userGuess.value)
// if (userGuess.value == "") {
  clearButton.style.backgroundColor = '#D0D2D3'
  resetButton.style.backgroundColor = '#D0D2D3'


guessButton.addEventListener('click', checkRange);

function checkRange () {
    var parseGuess = parseInt(userGuess.value)
    if (parseGuess > max) {
      lastGuessText.innerText = 'Maximum Guess is 100.';
    } else if (parseGuess < min) {
      lastGuessText.innerText = 'Minimum Guess is 1.'
    }
}

guessButton.addEventListener('click', function() {
  console.log(userGuess.value);
  lastGuess.innerText = userGuess.value;
  clearButton.style.backgroundColor = '#929497';
  resetButton.style.backgroundColor = '#929497';
  lastGuessText.innerText = 'Your last guess was';
  var parseGuess = parseInt(userGuess.value)
  if (parseGuess > randomInteger) {
    programResponse.innerText = 'That is too high!'
  } else if (parseGuess < randomInteger) {
    programResponse.innerText = 'That is too Low!'
  } else {programResponse.innerText = 'Boom!'}
  });

clearButton.addEventListener('click', function() {
  userGuess.value = '';
})
clearButton.addEventListener('mouseover', function() {
  clearButton.style.backgroundColor = '#EB008B';
})
clearButton.addEventListener('mouseout', function() {
  clearButton.style.backgroundColor = '#929497';
})





// var parsedGuess = parseInt(userGuess.value)//will need to be locally used



  

// var targetButton = document.querySelector('#my-button');

// targetButton.addEventListener('click', function() {
//   var welcomeMessage = document.querySelector('.answer');
//   var questionAnswer = document.querySelector('#my-park').value;
//   welcomeMessage.innerText = `${questionAnswer}`;
// });



