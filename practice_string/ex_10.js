// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

function swapcase() {
  var string = "AaBbc";
  var newArray=""
  
  for (i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newArray+=string[i].toLowerCase()
    } else {
      newArray+=(string[i].toUpperCase());
    }
  }
  return newArray
}
console.log(swapcase());
