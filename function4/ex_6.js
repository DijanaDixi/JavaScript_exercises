// Write a program that checks if a given array is symmetric.
//  An array is symmetric if it can be read the same way both from the left and the right
//  hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

function symetric(array) {
  

  var element = array[0];
  var lastElement = array[array.length - 1];
  for (
    var i = 0, j = array.length--;
    i < array.length, j >= array.length;
    i++, j--
  ) {
    if (element == lastElement) {
      return true
    } 
  }
  return false
}
var array = [2, 4, -2, 7, -2, 4, 2];
var output=symetric(array)
console.log(output? "yes": "no")