// Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filter() {
  var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
  var newArray = array.filter(Boolean);
  return newArray.join("");
}
console.log(filter());

// function filter(array) {
//   var newArray = [];
//   for (var i = 0, j = 0; i < array.length; i++) {
//     if (!array[i] == false) {
//       newArray[j] = array[i];
//       j++;
//     }
//   }

//   return newArray;
// }

// var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// console.log(filter(array));
