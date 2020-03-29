function sum(array) {
  var sumAll = 0;
  for (var i = 0; i < array.length; i++) {
    sumAll += array[i];
  }
  return sumAll;
}
var output = sum([1, 2, 3, 4]);
console.log(output);

var array1 = [1, 4, 5, 6].reduce(
  (acumulator, curentvalue) => acumulator + curentvalue
);
console.log(array1);

////////////////////
var array2 = [1, 4, 5, 7, 8, 3, 9];
function check() {
  var sum = 0;
  for (var i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 1) {
      sum += array2[i];
    } else {
      array2[i]++;
    }
  }
  return sum;
}
console.log(check());

