// Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"

function subStrAfterChars(string, character, position) {
  //   if (!character) {
  //     character = ":" || "a";
  //   }
  if (position === "a") {
    var index = string.indexOf(character);
    return string.slice(0, index);
  }
  else if (position === "b") {
    var index = string.indexOf(character);
    return string.slice(index+1);
  }else{
      return string
  }
}

console.log(subStrAfterChars("w3resource: JavaScript Exercises", ":", "a"));
console.log(subStrAfterChars("w3resource: JavaScript Exercises", "E", "b"));
