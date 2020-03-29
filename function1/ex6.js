// Write a program that calculates a number of appearances of a
//  given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

var a = [2, 4, 7, 8, 7, 7, 1];
var num = 7;
var sum = 0;
function check() {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === num) {
      sum += 1;
    }
  }
  return sum;
}
console.log(check());
