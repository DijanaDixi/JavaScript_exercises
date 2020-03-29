// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiplies() {
  var array = [-3, 11, 5, 3.4, -8];
  var newArray = [];
  array.forEach(function(number) {
      if(number>0){
    newArray.push(number * 2);
      }else{
          newArray.push(number)
      }
  });
  return newArray;
}
console.log(multiplies())