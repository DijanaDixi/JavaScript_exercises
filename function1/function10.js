// Write a program that calculates the number of appearances of a letter a
// in a given string. Modify the program so it calculates the number
// of both letters a and A.
// Input: appearance
// Result: 3

function calculates() {
  var input = "appearance";

  var result = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] == "a" || input[i] == "A") {
      result++;
    }
  }
  return result;
}
console.log(calculates());



var stringg="appearance"
console.log(stringg.match(/a/g).length)