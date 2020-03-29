// Write a program that calculates the sum of odd elements of a given array.
// Input: [5, 6, 1, 2, 3, 12]
// Result: 9
"use strict";
var array = [5, 6, 1, 2, 3, 12];
function calculates() {
 
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      sum = sum + array[i];
    }
  }
  return sum;
}
console.log(calculates());
