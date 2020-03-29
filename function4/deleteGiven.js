// Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function deletes() {
  var array = [4, 6, 2, 8, 2, 2];
  var number = 2;
  var output = [];
  for (var i = 0, j = 0; i < array.length; i++) {
    if (array[i] === number) {
      delete array[i];
    } else {
      output[j] = array[i];
      j++;
    } 
  }
  return output;
}

console.log(deletes());


