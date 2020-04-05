// Write a JavaScript program which accept a string as input and swap the case of each
// character. For example if you input
// 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase() {
  var string = "The Quick Brown Fox";
  return string
    .split(" ")
    .map(function(word) {
      return word.split("").map(function(letter) {
        if (letter === letter.toUpperCase()) {
          return letter.toLowerCase();
        } else {
          return letter.toUpperCase();
        }
      }).join(' ')
    }).join("  ")
    
}
console.log(swapCase());
