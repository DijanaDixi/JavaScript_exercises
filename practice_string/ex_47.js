// Write a JavaScript function to test whether a string ends with a specified string. Go to the editor
// Test Data :
// console.log(endsWith('JS string exercises', 'exercises'));
// true

function endsWith(string,word){
   return  string.indexOf(word)===string.length-word.length
}
console.log(endsWith('JS string exercises', 'exercises'));