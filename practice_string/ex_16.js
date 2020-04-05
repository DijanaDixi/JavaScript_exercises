// Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

function truncate(string, n, dot) {
  if (!dot) {
    dot = "..." || "!";
  }
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (i === n) {
      result += string[i] + dot;
      break;
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(truncate("We are doing JS string exercises."));
console.log(truncate("We are doing JS string exercises.", 19));
console.log(truncate("We are doing JS string exercises.", 15, "!!"));
