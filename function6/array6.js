//array.from

// var array = [1, 4, 5, 6, 9, 3];
// var newArray = Array.from(array, x => x + x);
// console.log(newArray);
// //es5
// var newArray = Array.from(array, function(x) {
//   return x + x;
// });

//every()
function calculate(curentvalue) {
  return curentvalue < 10;
}
var array = [1, 4, 5, 6, 99];

function doSomething() {
  var newA = [5, 6, 72, 5, 0];
  var newArray = [];
  newA.every(function(element, index) {
    newArray.push(element < 75);
  });
  return newArray;
}
console.log(doSomething());
