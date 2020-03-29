// Write a function to find the maximum element in array of numbers.
//  Filter out all non-number elements.

function find() {
  var array = [4, 6, 9, 7, 5].sort();
  var max = array[array.length - 1]
  var min = array[0]
  var newAr =Array.of(max,min)
 

  return newAr;
}
console.log(find());
