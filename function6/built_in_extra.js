/*Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/

function duplicate(input) {
  var newArray = [];
  input.map(function(element) {
    newArray.push(element, element);
  });
  return newArray;
}
var output = duplicate([2, 4, 7, 11, -2, 1]);
console.log(output);

// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// function removeDuplicate() {
//   var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
//   var newArray1 = [...new Set(array)];
//   newArray1.sort(function(a, b) {
//     return a - b;
//   });
//   return newArray1
// }
// console.log(removeDuplicate());

function removeDuplicate() {
  var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
  var newArray = array.splice("").sort();
  var array1 = [];
  newArray.forEach(function(element, index) {
    var nextElement = newArray[index + 1];
    var element = newArray[index];
    if (element !== nextElement) {
      array1.push(element);
    }
  });
  return array1.sort(function(a, b) {
    return a - b;
  });
}
console.log(removeDuplicate());

// Input: [1, 2, 9, 2, 1]
// Output: true
function odd() {
  var array = [1, 2, 9, 2, 1, 5];
  for (var i = 0; i < array.length; i++) {
    if (array.length % 2 === 1) {
      return "yes";
    }
  }
  return "no";
}
console.log(odd());

// Write a function that finds the smallest element of a given array.
// The function should return an object that contains the smallest value
// and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }
function smallest() {
  var array = [1, 4, -2, 11, 8, 1, -2, 3];
  var min = Math.min(...array);
  var index = array.lastIndexOf(min);
  return { min: min, lastindex: index };
}
console.log(smallest());
// Write a function that finds
// all the elements in a given array less than a given element.
// Input: [2, 3, 8, -2, 11, 4], 6
// 	Output: [2, 3, -2, 4]
function finds(number) {
  return number < 6;
}
var input = [2, 3, 8, -2, 11, 4].filter(finds);

console.log(input);
var newArray1 = [];
var input = [2, 3, 8, -2, 11, 4].forEach(function(element) {
  if (element < 6) {
    newArray1.push(element);
  }
  return newArray1;
});
console.log(newArray1);

// Write a function that finds all the elements in a given array that
// start with the “pro” substring. The function should be case
// insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

function proSubstring() {
  var input = ["JavaScript", "Programing", "fun", "product"];
  var newArray2 = [];
  for (var i = 0; i < input.length; i++) {
    var element = input[i];
    if (element.match(/pro/gi)) {
      newArray2.push(element);
    }
  }return newArray2
}
console.log(proSubstring());
