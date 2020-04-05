// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function capitalize_Words() {
  var string = "js string exercises";
  var newString = string
    .split(" ")
    .map(function(words) {
      return words.charAt(0).toUpperCase()+words.slice(1);
    }).join(" ");
    return newString
}
console.log(capitalize_Words());
