// Write a function to alphabetize words of a given string.
// Alphabetizing a string means rearranging the letters so
// they are sorted from A to Z.

// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function cutString(){
var string='Republic Of Serbia'
 return string.split(' ').map(function(word) {
    return word.split('').sort().join('');
  }).join(' ');
}

console.log(cutString())
