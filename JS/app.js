'use strict';

// IF/ELSE

// PSEUDOCODE
/*
if(some condition is met) {
  do this
} else if {
  do something different
} else {
  do a third thing
}
*/

/* First test for functionality
var test1 = prompt('do you see this');
console.log ("Test 1 answer is " + test1);
*/

var correctlyAnswer = prompt('Will you answer yes or no only ?')
if (correctlyAnswer === 'yes') {
  alert('Great !  Let\'s play !');
} else if (correctlyAnswer === 'no') {
  alert('You are making my coding life very difficult, but we\'ll try anyhow');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
} 
  console.log ("You answered " + correctlyAnswer + " when I asked if you would answer with yes or no.")


var containTheobromine = prompt('Does chocolate contain theobromine?').toLowerCase();
if (containTheobromine === 'yes') {
  alert('That is correct !');
} else if (containTheobromine === 'no') {
  alert('It actually does. =D');
} else {
    alert('I don\'t understand your answer. Sorry.  Onwards !');
  } 

  console.log ("You answered " + containTheobromine + " when I asked if chocolate contained theobromine.")


var rubyChocolate = prompt('Is there such a thing as ruby chocolate ?').toLowerCase();
if (rubyChocolate === 'yes') {
  alert('That is correct !');
} else if (rubyChocolate === 'no') {
  alert('It\'s very new and proprietary.');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
} 

  console.log ("You answered " + containTheobromine + " when I asked if ruby chocolate exists.")

var labsOfChocolate = prompt ('Are chocolate labs made of cocoa ?').toLowerCase();
if (labsOfChocolate === 'no') {
  alert('That is correct !');
} else if (labsOfChocolate === 'yes') {
  alert('I hope not !  Chocolate is bad for dogs !');
}  else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
} 

  console.log ("You answered " + containTheobromine + " when I asked if chocolate labs are made of cocoa.")

var marsCandy = prompt ('Are M\&M\'s actually from Mars ?').toLowerCase();
if (marsCandy === 'yes') {
  alert('That is correct - the Mars family makes them.');
} else if (marsCandy === 'no') {
  alert('Well. . . sort of. . .');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
} 
  console.log ("You answered " + containTheobromine + " when I asked if M\&M\'s are actually from Mars.")

var tiredOfChocolate = prompt('Are you tired of all these chocolate questions ?').toLowerCase();
if (tiredOfChocolate === 'yes') {
  alert('Awww.  I\'m not !');
} else if (tiredOfChocolate === 'no') {
  alert('Me, neither !');
} else {
  alert('I don\'t understand your answer. Sorry.  Onwards !');
} 

console.log ("You answered " + containTheobromine + " when I asked if you were tired of chocolate questions.")

/* -- Set up another set of questions to test alternate answers for functionality
var containTheobromine = prompt('Does chocolate contain theobromine?').toLowerCase();
if (containTheobromine === 'yes') {
  alert('That is correct !');
} else {
  alert('It actually does. =D');
}
  console.log ("You answered " + containTheobromine + " when I asked if chocolate contained theobromine.")


var rubyChocolate = prompt('Is there such a thing as ruby chocolate ?').toLowerCase();
if (rubyChocolate === 'yes') {
  alert('That is correct !');
} else {
  alert('It\'s very new and proprietary.');
}
  console.log ("You answered " + containTheobromine + " when I asked if ruby chocolate exists.")

var labsOfChocolate = prompt ('Are chocolate labs made of cocoa ?').toLowerCase();
if (labsOfChocolate === 'no') {
  alert('That is correct !');
} else {
  alert('I hope not !  Chocolate is bad for dogs !');
}
  console.log ("You answered " + containTheobromine + " when I asked if chocolate labs are made of cocoa.")

var marsCandy = prompt ('Are M\&M\'s actually from Mars ?').toLowerCase();
if (marsCandy === 'yes') {
  alert('That is correct - the Mars family makes them.');
} else {
  alert('Well. . . sort of. . .');
}
  console.log ("You answered " + containTheobromine + " when I asked if M\&M\'s are actually from Mars.")

var tiredOfChocolate = prompt('Are you tired of all these chocolate questions ?').toLowerCase();
if (tiredOfChocolate === 'yes') {
  alert('Awww.  I\'m not !');
} else {
  alert('Me, neither !');
}
console.log ("You answered " + containTheobromine + " when I asked if you were tired of chocolate questions.")
*/

