function doSomething(array) {
  var array2 = [1, 2, 3];
   array2.push(...array);
   return array2.join("").split("").reverse()
}
var output = doSomething([1, 1,6, 8, 99, 44, 5, 7]);
console.log(output);
//[ '7', '5', '4', '4', '9', '9', '8', '6', '1', '1', '3', '2', '1' ]
//just reverse() [7,5,4,4...]
