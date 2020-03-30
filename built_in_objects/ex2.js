// Write a JavaScript function that reverses a number.
// typeof result of the function should be “number”.

// 	12345 -> 54321

function reverses(num) {
  var num = num + "";
  var result = "";
  var lastIndex=num.length-1;
  for (var i = 0; i < num.length ; i++) {
    var element=num[lastIndex-i]
    console.log(element)
    result+=element
  }
  return parseInt(result);
}
console.log(typeof reverses(12345));

function reverses2(){
var number=12345;
var newNumber=number+""
return newNumberS=newNumber.split("").reverse().join("")
}
console.log(reverses2())

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));
