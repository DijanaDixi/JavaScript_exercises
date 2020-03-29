// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts
// all the odd numbers 1 to 500 from the calculated sum.
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

function doSomething() {
  var sumOdd = 0;
  var sum = 0;
  for (var i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  for (var i = 0; i <= 500; i++) {
    if (i % 2 !== 0) {
      sumOdd += i;
    }
  }
  return (sum-sumOdd)*12.5;
}
console.log(doSomething());
