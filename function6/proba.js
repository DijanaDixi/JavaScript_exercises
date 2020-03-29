'use strict';
function filterArray(inputArray, callback) {
   var resultArray = [];

   for (var i = 0; i < inputArray.length; i++) {
       var elem = inputArray[i];
       if (callback(elem)) {
           resultArray.push(elem)
       }
   }
   return resultArray;
}

var input = ["projection", "javascript", "promise"];

var output1 = filterArray(input, startsWithPro);
var output2 = filterArray(input, function (element) {
   // Contains word "java"
   return element.indexOf("java") !== -1
})

console.log(output1);
console.log(output2)