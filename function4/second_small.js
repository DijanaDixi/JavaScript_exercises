// Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function find() {
    var input = [4, 2, 2, -1, 6];
    var output = Math.min(...input);
    var secondoutput = input[0];
    for (var i = 0; i < input.length; i++) {
      if (input[i] > output && input[i] < secondoutput) {
        secondoutput = input[i];
      }
    }
    return (secondoutput);
  }
  console.log(find());