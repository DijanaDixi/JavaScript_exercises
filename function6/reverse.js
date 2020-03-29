// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function reverse(array) {
  var newArray = array.join("").split("").reverse()
  return newArray

}
var output = reverse([1, 2, 3, 4, 5, 6]);
console.log(output);

function rotaded(){
    var array=[1,2,3,4,5,6]
    var first=array.splice(0,2)//[1,2]
    var second=array.concat(first)//[3,4,5,6]+[1,2]
    return second
}
console.log(rotaded())