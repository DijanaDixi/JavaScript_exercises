// Write a program to insert a string within a string at a
// particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertString(string, word, position) {
 var position=position || 0;
 var result=""
 for(var i=0; i<string.length; i++){
     if(i===position){
result+=word+" "+ string[i]
     }else{
         result+=string[i]
     }
 }
 return result

}
console.log(insertString("My random string", "JS",3))