// . Write a JavaScript function to find a word within a string. Go to the editor
// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."

function search_word(string, word) {
  var newString = string.split(", ")
  var counte=0
  for (var i = 0; i < newString.length; i++) {
 
    if (newString[i] === word) {
     counte++
    }
  }
  return counte
}
console.log(search_word('fox The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, aa, dd, aa', 'aa'));



function search_word(str,word) {
    var reg = new RegExp(word,'g');
    var reg = str.match(reg);
    return word + ' was found ' +reg.length+ ' times';
    }
    console.log(search_word('The quick brown fox', 'fox'));
    console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
