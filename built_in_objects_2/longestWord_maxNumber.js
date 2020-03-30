
// najduza rec
function longestW() {
  var input = "my randomkjhh stringa";
  var splitInput = input.split(" ");
  for (var i = 0; i < splitInput.length; i++) {
    var longElement = 0;
    if (splitInput[i].length > longElement) {
      console.log(splitInput[i].length)
      longElement = splitInput[i];
    }
  }
  return longElement;
}
console.log(longestW());
// drugi  najmanji broj
// function smallestNumber() {
//   var array = [1, 1, -4, 234, 7, -3, 9, 98];
//   var small = array[0];
//   var second = array[0];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < small) {
//       small = array[i];
//     }
//   }
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > small && array[i] < second) {
//       second = array[i];
//     }
//   }
//   return `${small+' '+ second}`
// }
// console.log(smallestNumber());

// // najveci broj iz svakog niza
// function largestOfFour(mainArray) {
//     return mainArray.map(function(subArray) {
//       return Math.max(...subArray);
//     });
//   }
//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))