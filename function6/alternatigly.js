// Write a function that combines two arrays by alternatingly
//  taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
function combines(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i], arr2[i]);
  }
  return newArray
}
var output = combines(["a", "b", "c"], [1, 2, 3]);
console.log(output)
