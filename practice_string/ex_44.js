// 44. Write a JavaScript function to test whether the character at the provided (character) index is lower case. Go to the editor
// Test Data :
// console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
// true

function isUpperCaseAt(string, position) {
    for (var i = 0; i < string.length; i++) {
      var element = string.charAt(position);
      if (element === element.toLowerCase()) {
        return false;
      }
      return true;
    }
  }
  console.log(isUpperCaseAt("JS STRING EXERCISES", 1));