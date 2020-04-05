// . Write a JavaScript function to convert a string to title case. Go to the editor
// Test Data :
// console.log(sentenceCase('PHP exercises. python exercises.'));
// "Php Exercises. Python Exercises."
function sentenceCase(str) {
  if (str === null || str === "") return false;
//   else str = str.toString();
else

  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

console.log(sentenceCase("PHP exercises. python exercises."));

function sentenceCase(string) {
  var newString=string.split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
  return newString.join(" ")
}
console.log(sentenceCase("PHP exercises. python exercises."));
