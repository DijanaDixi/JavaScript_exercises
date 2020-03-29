
// Write a program to join all elements of the array into a string skipping
//  elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]


function joinAllElements(){
    var array=[NaN, 0, 15, false, -22, '', undefined, 47, null]
    var newArray=array.filter(Number).join("")
    return newArray
}
console.log(joinAllElements())

function joinArray(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      if (!!array[i]==false) { //!!array[i]=nan0falseundefinednull
        result += array[i]
      } else {
        array[i]++;
      }
    }
    return result;
  }
  console.log(joinArray([NaN, 0, 15, false, -22, "", undefined, 47, null]));