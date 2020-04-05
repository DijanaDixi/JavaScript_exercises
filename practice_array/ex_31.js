// 31. Write a JavaScript function to remove a specific element from an array. Go to the editor

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

var remove_array_element = function(array, n) {
  var newArray = [];
  array.forEach(function(element) {
    if (element !== n) {
      newArray.push(element);
    }
  });
  return newArray
};

var output = remove_array_element([2, 5, 9, 6], 5);
console.log(output);
