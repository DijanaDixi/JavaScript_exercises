// Write a function that finds the smallest element of a given array.
//  The function should return an object that contains the smallest value and its
//   last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function find(){
var input=[1, 4, -2, 11, 8, 1, -2, 3]
var min=Math.min(...input)
var index=input.lastIndexOf(min)
return index
}

console.log(find())

function findLowest(inputArray) {
    var sortedArray = inputArray.slice().sort();
    var minElem = sortedArray[0];
    var minElemIndex = inputArray.lastIndexOf(minElem);
    var minElemValue = inputArray[minElemIndex];
    return {
    minIndex: minElemIndex,
    minValue: minElemValue
    }
    }
    var input = [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
    var output = findLowest(input)
    console.log(output);