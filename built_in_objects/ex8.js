// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"


function  capitalize(){
var string="js string exercises"
var newString=string.charAt(0).toUpperCase()+ string.slice(1)
return newString
}
console.log(capitalize())