// Write a function to get the first n characters and add “...” at
//  the end of newly created string.

var string="my random string"
var index=string.split("").indexOf("a")
var newString=string.slice(0,index)+"..."
console.log(newString)


function getFrist() {
    var characters = "d";
    var input = "my random string";
    var dot = "...";
    var result = "";
    for (var i = 0; i < input.length; i++) {
      var element = input[i];
      if (element === characters) {
        result += dot;
      } else {
        result += element;
      }
    }
    return result;
  }
  console.log(getFrist())