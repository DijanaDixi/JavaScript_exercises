// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// Write a function that counts the number of elements less than the middle element.
//  If the given array has an even number of elements, print out an error message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4
function checks() {
  var array = [1, 2, 9, 2, 1];
  var result = "";
  for (var i = 0; i < array.length; i++) {
    if (array.length / 2 == 1) {
      result = "array is os";
    } else {
      result = "array is even";
    }
  }
  return result;
}
console.log(checks());

function isOddNumOfElements(inputArray) {
    return !!(inputArray.length % 2);
    }
    console.log(isOddNumOfElements([1, 2, 9, 2, 1]))
