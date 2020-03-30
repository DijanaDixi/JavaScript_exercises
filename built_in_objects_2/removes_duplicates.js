// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// function removeDuplicates() {
//   var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
//   var myArray = input.slice("").sort();
//   console.log(myArray === input);
//   var newArray = [];

//   for (var index = 0; index < input.length; index++) {
//     var nextElement = myArray[index + 1];
//     var element = myArray[index];
//     if (element !== nextElement) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }
// console.log(removeDuplicates());

function remove() {
  var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
  var newArray = [];
  var myArray = array.slice("").sort();
  myArray.forEach(function(element, index, arr) {
    var nextElement = arr[index + 1];
    if (element !== nextElement) {
      newArray.push(element);
    }
  });
  console.log(remove());
//   function concateRemove() {
//     let input11 = [4, 5, 6, 2, 3, "pt"];
//     let input22 = [3, 8, 11, 9];
//     let primes = Array.from(new Set([...input11, ...input22]));
//     return primes;
//   }
//   console.log(concateRemove());

//   return newArray;
// }

// console.log(remove());
