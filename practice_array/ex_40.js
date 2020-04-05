// Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. Go to the editor

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

function generate(){
    var n=-6;
    var n2=4
    var newArray=[]
    for(var i=0; i<n2; i++){
        newArray.push(n++)
    }
    return newArray
}
console.log(generate())
function array_range(startValue, len) {
    var arr = [], i;
    for (i = 0; i < len; i++) {
        arr[i] = startValue++;
    }
    return arr;
}
console.log(array_range(1, 4)); // [1, 2, 3, 4]
console.log(array_range(-6, 4)); // [-6, -5, -4, -3]