// Write a function that replaces spaces in a string with provided separator.
// If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

function replaces() {
  var string = "my random string";
  var separator = separator || "-";
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      result += separator;
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(replaces());

var string='ko to tamo peva'
var newString=string.replace(/ /g, '/')
console.log(newString)
