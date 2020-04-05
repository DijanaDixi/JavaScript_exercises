// Write a JavaScript function to capitalize the first letter of a string. Go to the editor
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

function capitalize(string){
    var newString=string.charAt(0).toUpperCase()+string.slice(1)
    return newString

}
console.log(capitalize('js string exercises'));