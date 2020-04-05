// Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

var array_Clone=function(input){
    
    return input.slice(0)

}
console.log(array_Clone([1, 2, 4, 0]))

var clone=(array)=>array.slice(0)
console.log(clone([98,0]))