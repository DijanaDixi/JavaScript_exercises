// Write a JavaScript function to convert a string into camel case.Go to the editor
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

function camelize(string) {
  var newString = string.split(" ").map(function(words) {
    return words.charAt(0).toUpperCase()+words.slice(1)
  }).join("")
  return newString;
}
console.log(camelize("JavaScript Exercises"));
