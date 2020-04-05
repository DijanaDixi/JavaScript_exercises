//  Write a JavaScript function to parameterize a string. 
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa

function string_parameterize(string){
    var newString=string.toLowerCase().split(" ").join("-")
    return newString

}
console.log(string_parameterize("Robin Singh from USA."))