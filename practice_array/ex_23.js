// Write a JavaScript function to find the difference of two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

function difference(arr1, arr2) {
  let diff = arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));
  return diff;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));



function difference2() {
  var array2 = [1, 2, 3, 4, 5];
  var array = [1, [2], [3, [[4]]], [5, 6]].toString();
  var newArray = array.split(",").map(function(num) {
    return +num;
  });
  return newArray.filter(x => !array2.includes(x))
    .concat(array2.filter(x => !newArray.includes(x)))
  
}
console.log(difference2());

function difference(a, b) {
  const arr = [...a, ...b];
  const duplicate = [];
  
  arr.flat(Infinity).forEach((item, index, arr) => {
  if (arr.lastIndexOf(item) === arr.indexOf(item)) {
  duplicate.push(item);
  }
  });
  
  return duplicate;
  }
  
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
