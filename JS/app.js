'use strict';

// Start of game

function createQuestion (questionName, questionText, alertTextCorrect, alertTextIncorrect, noAnswer)
{
  questionName = prompt(questionText).toLowerCase();
  if (questionName === 'yes') {
    alert(alertTextCorrect);
  }else if (questionName === 'no') {
    alert(alertTextIncorrect);
  }else
    return createQuestion;
  console.log(questionText + questionName);
}

createQuestion ('correctlyAnswer', 'Will you answer yes or no only?', 'Great!', 'Wrong!','you didn\'t answer');

// Game question Q1
var eyeColor = prompt('Do I have brown eyes ?').toLowerCase();
if (eyeColor === 'yes') {
  alert('That is correct !');
} else if (eyeColor === 'no') {
  alert('But, but - I can <see> them !  They\'re brown ! =D');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
}

console.log ('You answered ' + eyeColor + ' when I asked if my eyes were brown.');

// Game question Q2
var petsYN = prompt('Do I have any pets ?').toLowerCase();
if (petsYN === 'yes') {
  alert('That is correct !');
} else if (petsYN === 'no') {
  alert('We actually have four.  Two dogs, two kittehs.');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
}

console.log ('You answered ' + petsYN + ' when I asked if I had pets.');

// Game question Q3
var seattleiteYN = prompt('Do I live in Seattle proper or suburbs ?').toLowerCase();
if (seattleiteYN === 'yes') {
  alert('Sorry - that\'s incorrect - we live in the South Sound.');
} else if (seattleiteYN === 'no') {
  alert('That is correct !');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
}

console.log ('You answered ' + seattleiteYN + ' when I asked if I lived in Seattle or its suburbs.');

// Game question Q4
var seattleNativeYN = prompt('Am I a Seattle native ?').toLowerCase();
if (seattleNativeYN === 'yes') {
  alert('Sorry - that\'s incorrect - I\'m originally from West Texas.');
} else if (seattleNativeYN === 'no') {
  alert('That is correct !');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
}

console.log ('You answered ' + seattleNativeYN + ' when I asked if I was a Seattle native.');

// Game question Q5
var crazyCF = prompt('Am I crazy for thinking I could finish this bootcamp ?').toLowerCase();
if (crazyCF === 'yes') {
  alert('Maaaayyyyybbbbbe !');
} else if (crazyCF === 'no') {
  alert('Oh.  I think I might be.');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
}

console.log ('You answered ' + crazyCF + ' when I asked if I am crazy for thinking I can do this bootcamp.');

// Game question Q6
var favNum = 4;
// var endGameNum = 4;

var numOfGuesses = 4;
var i;
var doesThisMatch = false;

// Setting up a for loop
// Corrected the option order to break when correct number is chosen
function guessFavoriteNumber (guessNumber, promptText, answerY, answerN, noAnswer)
{
  guessNumber = prompt(promptText).toLowerCase();
  console.log(promptText + guessNumber);
  if (guessNumber < favNum) {
    alert(answerY);
  }else if (guessNumber > favNum) {
    alert(answerN);
  }else if (guessNumber === favNum){
    alert(noAnswer);
  }else
    doesThisMatch = true;
  console.log('You said ' + guessNumber + ' was my favorite number.');
  return createQuestion;
}

for (i = 1; i <= numOfGuesses && doesThisMatch !== true; i++) {
  guessFavoriteNumber('favNumber','What is my favorite number?','too low', 'too high', 'correct' );}


// Game question Q7 - six favorite movies

var favMovies = ['Die Hard', 'Despicable Me', 'Serenity', 'The Blind Side', 'The Usual Suspects', 'Iron Man']; //.toLowerCase
console.log('Favorite Movies: ' + favMovies);
var favMoviesString = favMovies.toString();
var favMoviesLowerString = favMoviesString.toLowerCase();
var favMoviesLower = favMoviesString.split(',');
console.log('Favorite Movies lower case: ' + favMoviesString);

var maxGuesses = 6;
var doesThisMovieMatch = false;
var correctGuess = 0;
var correctAnswer = '';

// Set up a for loop
// Set up option order to break when correct number is chosen

var userName = prompt('Hey -- what\'s your name ?');

for (var i = 0; i < maxGuesses; i++) {
  var favMovieGuess = prompt('What is one of my favorite movies ?').toLowerCase();
  console.log('Favorite movie guess: ' + favMovieGuess);

  for (var index = 0; index < favMovies.length && doesThisMovieMatch != true; index++) {
    if (favMovieGuess == favMovies[index].toLowerCase()) {
      doesThisMovieMatch = true;
      correctGuess++;
      correctAnswer += '\n' + favMovieGuess;
      alert('That is correct !  Good job !');
    }
  }
  if (doesThisMovieMatch === false) {
    alert('Sorry - not my favorite !  Try again.');
  }
  doesThisMovieMatch = false;
  console.log('Number of Guesses ' + i);
  console.log('You guessed ' + favMovieGuess + ' was one of my favorite movies !');
}

alert('Number of correct guesses for ' + userName + ': ' + correctGuess + '\n' + '\n' + 'These are all your correct answers: ' + correctAnswer);

