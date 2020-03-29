var number = 12345;
var newNumber = number.toString();

var reverse = newNumber
  .split("")
  .reverse()
  .join("");
console.log(typeof parseFloat(reverse));

// “Webmaster” -> “abeemrstw”
var string = "Webmaster";
var newString = string
  .toUpperCase()
  .split("")
  .sort()
  .join("")
  .toLowerCase();
console.log(newString);

// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function reverse1() {
    var string1 = "Republic Of Serbia";
  return string1.split(" ").map(function(word) {
      return word.split("").sort().join("");
    }).join(" ");
}
console.log(reverse1());

// "John Snow" -> [ 'John', 'Snow' ]

var str="Joyhn Snow"
var newstr=str.split(" ")
console.log(newstr)

// "John Snow" -> 	"John S."
function check(){
var string2="John Snow".split(" ")
var newString2=string2[0]+" "+string2[1].charAt(0)+"."
return newString2

}
console.log(check())


// "js string exercises" -> "Js string exercises"
var string3='js string exercises'
var newString3=string3.slice(0,1).toUpperCase()+string3.slice(1)
console.log(newString3)

// "somerandomaddress@example.com" -> "somerand...@example.com"
var string4='somerandomaddress@example.com'
var part=string4.split("@")
var part1=part[0].slice(0,6)+"..."+part[1]
console.log(part1)

console.log(part1)

// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
