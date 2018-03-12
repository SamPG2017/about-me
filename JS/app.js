'use strict';

// Start of game
var correctlyAnswer = prompt('Will you answer yes or no only ?').toLowerCase();
if (correctlyAnswer === 'yes') {
  alert('Great !  Let\'s play !');
} else if (correctlyAnswer === 'no') {
  alert('You are making my coding life very difficult, but we\'ll try anyhow');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
} 
console.log ('You answered ' + correctlyAnswer + ' when I asked if you would answer with yes or no.');


// Game question Q1
// trying to get the function wrap to work 

function createQuestion (questionID, promptText, answerY, answerN, answerNone, begConsoleLog, endConsoleLog) 
{
  questionID = prompt(promptText).toLowerCase();
  if (questionID === 'yes'){
    alert(answerY); 
    } else if (questionID === 'no') {
      alert(answerN);
    } else {
      alert(answerNone); // add a way to handle null response
    }
    console.log (begConsoleLog  + questionID +  endConsoleLog);  
}

createQuestion('eyeColor', 'Do I have brown eyes ?', 'That is correct !', 'But, but - I can <see> them !  They\'re brown !', 'I don\'t understand your answer.  Sorry.  Onwards !', 'You answered ', ' when I asked if my eyes were brown.');

createQuestion('petsYN', 'Do I have any pets ?', 'That is correct !', 'We actually have four.  Two dogs, two kittehs. !', 'I don\'t understand your answer.  Sorry.  Onwards !', 'You answered ', ' when I asked if I had pets.'); 

createQuestion('seattleiteYN', 'Do I live in Seattle proper or suburbs ?', 'Sorry - that\'s incorrect - we live in the South Sound', 'That is correct !', 'I don\'t understand your answer.  Sorry.  Onwards !', 'You answered ', ' when I asked if I lived in Seattle or its suburbs.');

createQuestion('seattleNativeYN', 'Am I Seattle native ?', 'Sorry - that\'s incorrect - I\'m originally from West Texas.', 'That is correct !', 'I don\'t understand your answer.  Sorry.  Onwards !', 'You answered ', ' when I asked if I was a Seattle native.');

createQuestion('crazyCF', 'Am I crazy for thinking I could finish this bootcamp ?', 'Maaaayyyyybbbbbe !', 'Oh.  I think I might be.', 'I don\'t understand your answer.  Sorry.  Onwards !', 'You answered ',  'when I asked if I am crazy for thinking I can do this bootcamp.');


/*
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
var endGameNum = 4;

var numOfGuesses = 4;
var i;
var doesThisMatch = false

// Setting up a for loop
// Corrected the option order to break when correct number is chosen

for (i = 1; i <= numOfGuesses && doesThisMatch != true; i++) {
  var favNumGuess = prompt('What is my favorite number ?');  

  if (favNumGuess > favNum) {
    alert('Sorry - too high !  Try again.');
  }  else if (favNumGuess < favNum) {
    alert('Sorry - too low !  Try again.');
  }  else if (favNumGuess != favNum) {
    alert('Sorry - this game requires a number.  Try again.');
  } else {
    doesThisMatch = true;
    alert('That is correct !  Good job !');
  }
    console.log('Number of Guesses ' + i)
    console.log('You said ' + favNumGuess + ' was my favorite number.');
} 
                            
// Game question Q7 - six favorite movies
                            
var favMovies = ['Die Hard', 'Despicable Me', 'Serenity', 'The Blind Side', 'The Usual Suspects', 'Iron Man']; //.toLowerCase
console.log('Favorite Movies: ' + favMovies);
var favMoviesString = favMovies.toString();
var favMoviesLowerString = favMoviesString.toLowerCase();
var favMoviesLower = favMoviesString.split(",");
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
  console.log('Number of Guesses ' + i)
  console.log('You guessed ' + favMovieGuess + ' was one of my favorite movies !');  
}

  alert('Number of correct guesses for ' + userName + ': ' + correctGuess + '\n' + '\n' + 'These are all your correct answers: ' + correctAnswer);
  */
