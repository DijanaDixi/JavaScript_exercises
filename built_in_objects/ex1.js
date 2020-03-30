// Write a function to convert a number from one base (radix) to another.
// Hint: Use one of the built-in functions and toString method of
// one of the built-in Object Wrappers;

// 'ff', 16, 8 -> 377

function convert(number,base, base2) {
  var numberNew = number.toString(base);
  var result=parseInt(numberNew,base2)
  return result;
}
 
console.log(convert("ff",16,8));
