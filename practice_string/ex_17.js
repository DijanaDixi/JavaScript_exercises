// Write a JavaScript function to chop a string into chunks of a given length. Go to the editor
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

function string_chop() {
  var string = "w3resource";
  var n = 2;
  var newArray = [];
  for (var i = 0; i < string.length; i+=n) {
    newArray.push(string.substr(i,n));
  }

  return newArray;
}
console.log(string_chop("w3resource", 2));
