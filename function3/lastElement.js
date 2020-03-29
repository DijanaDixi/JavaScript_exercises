// Write a function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

function lastIndex() {
  var array = [7, 9, 0, -2,8,9,0];
  var last = array.slice(1).slice(-2);
  // arr.slice(Math.max(arr.length - 5, 1))

  // array.slice(-1)[0], last Element
  // my_array[my_array.length - 1];
  return last;
}

console.log(lastIndex());
