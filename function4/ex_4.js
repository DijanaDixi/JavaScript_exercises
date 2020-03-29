// Write a program that finds the second smallest number
// and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function secondSmallest() {
    var array = [4, 2, 2, -1, 6];
    var min = Math.min(...array);
    var secondSmall = array[0];
  
    for (var i = 0; i < array.length; i++) {
      if (array[i] > min && array[i]< secondSmall) {
        secondSmall = array[i];
      }
    }
    return secondSmall;
  }
  console.log(secondSmallest());