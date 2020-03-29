// Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

// function reverseNumber() {
//   var number = 12345;
//   var numberS=number+  ''
//   var numberString = numberS.split("").reverse().join("");
//   return parseFloat(numberString);
// }
// console.log(typeof reverseNumber());

function reverseNumber(num) {
    num = num + "";
    var output = "";
    var lastIndex = num.length - 1;
    console.log(lastIndex)
 
    for (var index = 0; index < num.length; index++) {
        var element = num[lastIndex - index];
        console.log(element)
        output += element;
    }
 
    var reversedNum = parseFloat(output);
    return reversedNum;
 }
 
//  var result = reverseNumber(98765)
 
//  console.log(typeof result);
//  console.log(result);

