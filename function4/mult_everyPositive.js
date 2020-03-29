// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// function multiplies() {
//   var array = [-3, 11, 5, 3.4, -8];
//   var output = [];
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (element > 0) {
//       output[i] = element * 2;
//     } else {
//       output[i] = element;
//     }
//   }
//   return output;
// }
// console.log(multiplies());

function mult() {
  var array = [-3, 11, 5, 3.4, -8];
  var output = [];
  array.forEach(function(element) {
    if (element > 0) {
      output.push(element * 2);
    } else {
      output.push(element);
    }
  });
  return output;
}
console.log(mult())