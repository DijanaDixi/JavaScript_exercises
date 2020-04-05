// Write a JavaScript function to extract a specified number of characters from a string. 
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(string,n){
   var newString=string.slice(0,n)
   return newString
}
console.log(truncate_string("Robin Singh",4))