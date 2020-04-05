// Write a JavaScript function to repeat a string a specified times. Go to the editor
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."
// Click me to see the solution.

 function repeat_string(string,n){
     var result=''
     if(!n ){
         return `Error in string or count`
     }
     for(var i=0; i<n; i++){
         result+=string
     }
     return result
 }
 console.log(repeat_string('a',4 ));
console.log(repeat_string('a'));