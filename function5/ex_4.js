// // Sort a previously defined array.
// // Place its sorted values into a new array whose values are equivalent to the first array's
// values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

function sortArray() {
  var newArray = [];
  var input = [13, 11, 15, 5, 6, 1, 8, 12];
  input.sort(function(a, b) {
    return a - b;
  });
  input.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray.reverse();
}
console.log(sortArray());

