// 1. Write a JavaScript function to check whether an `input` is an array or not.

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// function is_array(array) {
//     if(typeof array === "object"){
//         return true
//     }
//     return false
// }
// console.log(is_array([1, 2, 4, 0]));

var is_array = function(input) {
  if (toString.call(input) === "[object Array]") 
    return true;
    return false;
  
};
console.log(is_array([1, 2, 4, 0]))