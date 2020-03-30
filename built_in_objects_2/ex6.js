// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

function contains(){
    var string="hhE3lo"
    for(var i=0; i<string.length; i++){
      var element=string[i]
      var num=parseInt(element)
      if(!isNaN(num) && typeof num === "number"){
          return true
      }
      
    }
    return false
}
console.log(contains())