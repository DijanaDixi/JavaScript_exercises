// Write a JavaScript function to create a specified number of elements with pre-filled numeric value array. Go to the editor

// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]

function array_filled(num1, num2) {
  var array = [];
  for (var i = 0; i < num1; i++) {
    array.push(num2);
  }
  return array;
}
console.log(array_filled(4,11));

