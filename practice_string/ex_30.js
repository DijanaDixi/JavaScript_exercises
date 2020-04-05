// 30. Write a JavaScript function check if a string ends with specified suffix. Go to the editor
// Test Data :
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false

function string_endsWith(string, word) {
  if (word === "") return false;

  if (string.endsWith(word))
   return true;
}
console.log(string_endsWith("JS PHP PYTHON", "PYTHON"));
// true;
console.log(string_endsWith("JS PHP PYTHON", ""));
// false;
