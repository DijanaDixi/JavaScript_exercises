// Find the min and max element in the following array and switch
//  their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function replaceNumber() {
  var array = [3, 500, 12, 149, 53, 414, 1, 19];
  var min = Math.min(...array);
  var indexofmin = array.indexOf(min);
  var min = Math.min(...array);
  var indexofmax = array.indexOf(max);
  for (var i = 0; i < array.length; i++) {
    if (array[i] === max) {
      array[i] = min;
    } else if (array[i] === min) {
      array[i] = max;
    } else {
      array[i];
    }
  }return array
}
console.log(replaceNumber());


// const index = items.findIndex(x => x === 3452)
// items[index] = 1010

// items[0] = 5;
// items[5] = 100;
////drugi nacin

var array = [3, 500, 12, 149, 53, 414, 1, 19]
var min = Math.min(...array);
var max = Math.max(...array);
array[array.indexOf(min)] = max
array[array.indexOf(max)] = min
console.log(array)

// var point = items.indexOf(334);

// if (point !== -1) {
//     items[point] = 1010;
// }