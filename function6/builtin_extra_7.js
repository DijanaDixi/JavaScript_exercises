// Write a function that checks if a given string is written in all capitals.
// Write a function that checks if a given string contains any digits.
// Write a function that checks if a given string is a valid hexadecimal color.
// Write a function that checks if a given number belongs to the interval from 1900 to 2018.
// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function check() {
  var string = "DIJANA";
  return string === string.toUpperCase();
}
console.log(check());

// Write a function that checks if a given string contains any digits.
function check2() {
  var string1 = "I love javaScript";
  for (var i = 0; i < string1.length; i++) {
    var element = parseFloat(string1[i]);
    console.log(element)
    if (typeof element === "number" && !Number.isNaN(element)) {
      return "digits";
    }
  }
  return "no digits";
}
console.log(check2());

'use strict';
function isInInterval(num) {
   return num >= 1900 && num <= 2018;
}

var input = 1995;
var output = isInInterval(input);

console.log(output)

// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

