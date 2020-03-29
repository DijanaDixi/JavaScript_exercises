// Write a program that concatenates a given string given number of times.
//  For example, if “abc” and 4 are given values,
// the program prints out abcabcabcabc.

function concatenates(){
    var string="abc"
    var result=""
    for(var i=0; i<4; i++){
        result=result+string
    }
    return result
}

console.log(concatenates())