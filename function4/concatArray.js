// Write a program that intertwines two arrays.
// You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function merge() {
  if (array1.length == array2.length) {
    var c = [];
    for (var i = 0; i < array1.length; i++) {
      c.push(array1[i], array2[i]);
    }
    return c;
  }
  return null;
}
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 2, 9];
var array = merge(array1, array2);
console.log(array);

var c = [...array].sort(function(a, b) {
  return a - b;
});
console.log(c);
var b = c.filter((item, pos) => c.indexOf(item) === pos);
console.log(b
    );
