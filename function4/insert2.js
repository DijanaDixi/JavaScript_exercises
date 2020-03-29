function insert() {
  var array = [2, -2, 33, 12, 5, 8];
  var array2 = [4, 5];
  array.splice(3, 0, 1, ...array2);
  //   array.splice(3,0,78)
  return array;
}
console.log(insert());


// Array.prototype.insert = function(array) {
//  var arr=Array.from(array)
//  arr.splice(2,0,5)
// };
// var x=([7, 8, 9]);
// console.log(x.insert());
var array = [2, 4, 5, 6];
var arr1 = [...array];
array.splice(2, 0, 8);
console.log(array)//false

