// Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function find(){
    var input=[4, 2, 2, -1, 6]
    var output=Math.min(...input);
    return output+" "+ input.indexOf(output)
}
console.log(find())