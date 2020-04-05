// 41. Write a JavaScript function to capitalize each word in the string. 
// Test Data :
// console.log(capitalizeWords('js string exercises'));
// "JS STRING EXERCISES"


function capitalizeWords(string){
    return string.toUpperCase()

}
console.log(capitalizeWords('js string exercises'))
// function capitalizeWords(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toUpperCase();});
// }
// console.log(capitalizeWords('js string exercises'));
