// Write a program that concatenates two arrays. 

function intertwines(array1, array2) {
  array1.push(...array2);
  return array1.sort(function(a,b){
      return a-b
  })
}
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var output = intertwines(array1, array2);
console.log(output)
