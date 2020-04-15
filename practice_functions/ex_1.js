// Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223


function reverseNumber(){
    var num=32243
    var numString=num.toString()
    numString.split("").reverse().join()
    return Number(numString)
}
console.log(reverseNumber())