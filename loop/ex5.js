// Write a program which prints the elements of the following array as a single string.

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var string = "";
for (var i = 0; i < x.length; i++) {
  var element = x[i];
  string = string + element;
}
console.log(string)


var b=x.slice("").join("")
console.log(b)

