// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function find() {
  var array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  var mostFrequent = 1;
  var m = 0;
  var item;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        m++;
      }
      if (mostFrequent < m) {
        mostFrequent = m;
        item = array[i];
      }
    }
    m = 0;
  }
  return item + " ( " + mostFrequent + " times ) ";
}
console.log(find());
