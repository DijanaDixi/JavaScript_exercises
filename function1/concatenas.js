// Write a program that concatenates a given string given number of times.
//  For example, if “abc” and 4 are given values,
// the program prints out abcabcabcabc.
var input = "abc";
var c = "";
function concatenates() {
  for (var i = 0; i < 4; i++) {
    c = c + input;
  }
  return c;
}
console.log(concatenates());

function con(input, number) {
  if (number > 0) 
    return input.repeat(number);
  else return ""
}
console.log(con("ha", 3));

times > 0 ? string.repeat(times) : "";
if (times > 0) {    
  return string.repeat(times);
} else {
  return "";
}