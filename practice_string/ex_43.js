// 43. Write a JavaScript function to test whether the character at the provided (character) index is upper case. Go to the editor
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

function isUpperCaseAt(string, position) {
  for (var i = 0; i < string.length; i++) {
    var element = string.charAt(position);
    if (element === element.toUpperCase()) {
      return true;
    }
    return false;
  }
}
console.log(isUpperCaseAt("JS STRING EXERCISES", 1));
