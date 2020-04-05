// Write a JavaScript function to strip leading and trailing spaces from a string. Go to the editor
// Test Data :
// console.log(strip('w3resource '));
// console.log(strip(' w3resource'));
// console.log(strip(' w3resource '));
// Output :
// "w3resource"
// "w3resource"
// "w3resource"

function strip(string) {
  return string.trim()
}
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));
