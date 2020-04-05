// Write a JavaScript function to merge two arrays and removes all duplicates elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

function merge_array() {
  var array1 = [1, 2, 3];
  var array2 = [2, 30, 1];
  var newArray=array1.concat(array2)
  var filterDuplicate=newArray.filter((el,index)=>newArray.indexOf(el)===index)
  return filterDuplicate
}
console.log(merge_array())