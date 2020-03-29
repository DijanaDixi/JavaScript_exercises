// Write a program that inserts a given element e on the given position p
// in the array a. If the value of the position is greater than the array length,
//  print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function inserts() {
  var array = [2, -2, 33, 12, 5, 8];
  var position = 3;
  var element = 78;
  var newArray = [];

  for (var i = 0, j = 0; i < array.length; i++) {
    if (array[i] === position) {
      newArray[j] = element;
      newArray[j + 1] = array[i];
      j += 2;
    } else {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
}
console.log(inserts());


