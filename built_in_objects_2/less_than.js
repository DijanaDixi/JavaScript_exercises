// Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function finds(input, number) {
  var result = [];
  input.forEach(element => {
    if (element < number) {
      result.push(element);
    }
  });
  return result;
}
console.log(finds([2, 3, 8, -2, 11, 4], 6));

var array = [1, 2, 3, -4, 6, -9];
var array1 = array.find(nesto=>nesto<0)
 


console.log(array1);
