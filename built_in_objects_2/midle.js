// Write a function that counts the number of elements less
//  than the middle element. If the given array has an even number of elements,
//  print out an error message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function counts() {
//   var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
//   var result = "";
//   for (var i = 0; i < input.length; i++) {
//     if (input.length % 2 == 0) {
//       result = "erorr";
//     } else {
//       result = input.length / 2;
//     }
//   }
//   return Math.round(result);
// }
// console.log(counts());

function numOfElementsLessThanMiddle(inputArray) {
    if (inputArray.length % 2 === 0) {
    return "ERROR";
    }
    var counter = 0;
    var middleElementIndex = (inputArray.length - 1)/2
    
    var middleElement = inputArray[middleElementIndex];
    console.log(middleElement)
    inputArray.forEach(function (element) {
    if (element < middleElement) {
    counter++;
    }
    });
    return counter;
    
    }
    console.log(numOfElementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]))
    
