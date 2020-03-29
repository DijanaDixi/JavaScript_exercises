// Write a function to find the position of the last occurrence of a character in a string.
//  The result should be in human numeration form. If there are no occurrences of the 
//  character,
//  function should return -1.
function findPosition(){
    var string="My random stringa"
    var newString=string.lastIndexOf("a")
    return newString
}
console.log(findPosition())

function findPositions(){
    var string2="My random staring"
    var letter="a"
    for(var i=string2.length-1; i>=0; i--){
        if(string2[i]===letter){
            return i
        }
    }
    return -1
}
console.log(findPositions())