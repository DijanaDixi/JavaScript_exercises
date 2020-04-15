// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function checks() {
  var string = "madam";

  var first = string[0];
  var last = string[string.length - 1];
  for (
    var i = 0, j = string.length--;
    i < string.length, j >= string.length;
    i++, j--
  ) {
    if (first === last) {
      return "yes";
    }
  }
  return "no";
}
console.log(checks());
