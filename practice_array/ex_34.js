// Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

function largest(){
    var n=4
    var array=[ 43, 56, 23, 89, 88, 90, 99, 652]
    var newArray=array.sort(function(a,b){
        return b-a
        // return a-b
    })
    // return newArray.slice(-n).shift()
    return newArray[n-1]
}
console.log(largest())