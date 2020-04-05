// Write a JavaScript function to remove.
//  'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function remove() {
  var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
  var newArray=[]
  array.forEach(element => {
    if (!element ==false) {
      newArray.push(element);
    }
  });
  return newArray
}
console.log(remove())