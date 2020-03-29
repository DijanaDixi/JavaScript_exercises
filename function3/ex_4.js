// Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverses(){
    var number=12345+''
    var newNumber=number.split("").reverse().join("")
    return Number(newNumber)
 

}
console.log(reverses())