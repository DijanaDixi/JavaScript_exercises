// Write a JavaScript program to compute the union of two arrays. Go to the editor
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
function compute() {
  var array = [1, 2, 3];

  var array2 = [100, 2, 1, 10];
  var c = array.concat(array2);
  var d= c.filter((element,index)=>c.indexOf(element)===index)
  return d.sort(function(a,b){
     return a-b
  })
}
console.log(compute())