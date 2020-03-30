
// Write a function to convert a string to its abbreviated form. 

// "John Snow" -> 	"John S."

function convert(){
var string="John Snow"
var firstString=string.split(' ')[0]
var secondSring=string.split(' ')[1]
var third=firstString+ " "+secondSring.charAt(0).toUpperCase()+"."
return third
}
console.log(convert())

function convert2(){
    var string="John Snow";
    var firstString=string.slice(0,6)+"."
    return firstString
}
console.log(convert2())

