// Write a JavaScript program to find the sum of squares of a numeric vector.

function sumSquer(){
    var array=[0,1,2,3,4]
    var sum=0
    for(var i=0;i<array.length; i++){
        sum+=Math.pow(array[i], 2)

    }
    return sum
}
console.log(sumSquer())