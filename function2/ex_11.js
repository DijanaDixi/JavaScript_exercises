// Write a function that converts an array of strings into an array of numbers.
//  Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function converts() {
  var array = ["1", "21", undefined, "42", "1e+3", Infinity];
  var newArray = [];
  array.forEach(function(number) {
    if (typeof number === "string") {
      newArray.push(Number(number));
    }
  });
  return newArray;
}
console.log(converts());

// function converts() {
//     var array = ["1", "21", undefined, "42", "1e+3", Infinity];
//     var newArray = [];
//     for (var i = 0,j=0; i < array.length; i++) {
//       var element = array[i];
//       var number = parseFloat(element);
//       if (!isNaN(number) && isFinite(number)) {
//         newArray[j] =number;
//         j++
//       }
//     }
//     return newArray;
//   }
//   console.log(converts());
