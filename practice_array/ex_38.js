// . Write a JavaScript function to move an array element from one position to another. Go to the editor

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

function move() {
  var array = [10, 20, 30, 40, 50];
  var n1 = -1;
  var n2 = -2;
  if(n1>0){
    var first = array[n1];
    var second = array[n2];
    array[n1] = second;
    array[n2] = first;
    
  }
  return array
}
console.log(move());
