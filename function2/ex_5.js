// Write a function to find the position of the first occurrence of a character in a string. 
// The result should be in human numeration form. 
// If there are no occurrences of the character, the function should return -1.

function findPosition(){
    var string="My random string"
    var letter="a"
    var result=0
    for(var i=0; i<string.length; i++){
        if(string[i]==letter){
           return result=i
        }else{
            result="-1"
        }
    }
    return result
}
console.log(findPosition())