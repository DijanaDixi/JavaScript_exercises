// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

function findWord() {
  var string = "The quick brown fox";
  var word="fox"
  var matchString = string.match(/fox/g);
  return `${word} was found ${matchString.length} times`
}
console.log(findWord())