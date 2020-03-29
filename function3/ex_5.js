// Write a function to get the last element of an array.
//  Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  
var array=[7, 9, 0, -2]
var n=-2
var newArray=array.slice(n)
console.log(newArray)
