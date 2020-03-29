// Find the min and max element in the following array and switch their places.
// Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function switchElement() {
  var array = [3, 500, 12, 149, 53, 414, 1, 19];
  var min = Math.min(...array) / 1;
  var max = Math.max(...array) / 500;
  var indexOfmin = array.indexOf(min);
  var indexOfMax = array.indexOf(max);
  array[indexOfmin] = max;
  array[indexOfMax] = min;
  return array;
}
console.log(switchElement());
