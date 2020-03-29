// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function calculates() {
    var array = [3, 11, -5, -3, 2];
    var result = 0;
    array.forEach(number => {
      if (number > 0) {
        result += number;
      }
    });
    return result;
  }
  console.log(calculates())