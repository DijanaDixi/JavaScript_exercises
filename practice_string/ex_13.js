// Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

function repeat(string, n) {
  var string2 = "";
  for (var i = 0; i < n; i++) {
    string2+=string
  }
  return string2
}
console.log(repeat("Ha!", 3));
