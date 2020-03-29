// function sum() {
//   var arr = [];
//   for (var i = 0; i < arguments.length; i++) {
//     arr[i] = arguments[i] * 2;
//   }
//   return arr;
// }
// console.log(sum(1, 2, 3));

function sum() {
  var array = [1, 2, 3];
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result
}

console.log(sum());
