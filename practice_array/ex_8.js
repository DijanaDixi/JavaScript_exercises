// Write a JavaScript program to find the most frequent item of an
// array.

//  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function mostFrequent() {
  var array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

  var mostFrequent1 = 1;
  var m = 0;
  var item;
  for (var i = 0; i < array.length; i++) {
   
    for (j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        m++;
      }
      if (mostFrequent1 < m) {
        mostFrequent1 = m;
        item = array[i];
      }
    }
    m = 0;
  }
  return  `${item}  ${mostFrequent1} times`;
}
console.log(mostFrequent());
