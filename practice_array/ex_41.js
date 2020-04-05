// Write a JavaScript function to generate an array between two integers of 1 step length. Go to the editor

// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

function generate(){
    var n=-4;
    var n2=7
    var newArray=[]
    for(var i=n; i<=n2; i++){
        newArray.push(i)
    }
    return newArray
}
console.log(generate())