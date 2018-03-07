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


/*

*/

