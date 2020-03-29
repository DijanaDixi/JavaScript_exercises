// Write a function to count the number of letter occurrences in a string.

// "My random string", "n" -> 2

function occurrences() {
  var string = "My random string";
  var letter = "n";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    } else {
      continue;
    }
  }
  return count;
}
console.log(occurrences())