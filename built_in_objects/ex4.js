// Write a function to alphabetize words of a given string. Alphabetizing a 
// string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function myFunction(string) {
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
};
console.log(myFunction('Republic Of Serbia'))

function reverseWord (sentence) {
    return sentence.split(' ').map(function(word) {
      return word.split('').sort().join('');
    }).join(' ');
  }
  
  console.log(reverseWord("Republic Of Serbia"));