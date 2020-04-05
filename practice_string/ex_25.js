// 25. Write a JavaScript function to alphabetize a given string. Go to the editor
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// Test Data :
// console.log(alphabetize_string('United States'));
// Output :
// "SUadeeinsttt"
// Click me to see the solution.

function alphabetize_string(string) {
//   return string.split(" ").join("").split("").sort().join("")
return string.split('').sort().join('').trim();
}
console.log(alphabetize_string("United States"));

