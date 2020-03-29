// Write a program that checks if a given array is symmetric.
// An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

function simetric() {
  var array = [2, 4, -2, 7, -2, 4, 2];
  var element = array[0];
  var element2 = array[array.length - 1];
  console.log(element2);
  for (
    var i = 0, j = array.length--;
    i < array.length, j >= array.length;
    i++, j--
  ) {
    console.log(i, j);
    if (element == element2) {
      return "yes";
    }
  }
  return "no";
}
console.log(simetric());
