// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longestWord() {
  var string = "Web Development Tutorial";
  var newString = string.split(" ");
  var elem = newString[0];
  for (var i = 0; i < newString.length; i++) {
    if ( newString[i].length>elem.length) {
      elem = newString[i];
    }
  }
  return elem;
}
console.log(longestWord());



function longest(input)
{
let x = input.split(" ").sort(function(a, b){return b.length - a.length});
return x[0]
}
console.log(longest("la bla blaa"))
