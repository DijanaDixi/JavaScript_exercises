//  Write a function to get the first n characters and add “...”
//  at the end of newly created string.

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