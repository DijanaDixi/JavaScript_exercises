// Write a JavaScript function to convert a string in abbreviated form.
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

function abbrev_name(string){
 var index=string.indexOf("S")+1
 var newString=string.slice(0,index)+"."
 return newString
}
console.log(abbrev_name("Robin Singh"))