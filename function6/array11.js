// Write a program to insert a string within a string
// at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

// function position() {
//     var string='My random string';
//     var letter="JS";
//     var position=10;
//     var output=[string.slice(0,position), letter, string.slice(position)].join(' ')
//     return output
// }
// console.log(position())

function position2() {
  var string = "My random string";
  var position = 50;
  var word = "Js";
  var newString = "";
  string.split("").forEach(function(letter, index) {
    if (letter !==index) {
      newString =word+' '+string;
    } else {
      newString = [
        string.slice(0, position),
        word,
        string.slice(position)
      ].join(" ");
    }
  });
  return newString;
}
console.log(position2())

var stringS="my name is Dijana"
stringS.split("").map(function(element,index){
    console.log(element+' '+index)
})

var ana='ana'
console.log(ana.length)
var arr1 = new Array(10);
console.log(arr1)