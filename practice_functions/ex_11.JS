// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function secondLowest() {
  var array = [1,2,3,4,5].sort(function(a, b) {
    return a - b;
  });
 var min=array.slice(1,2)
 var max=array[array.length-2]
 return `${min} ${max}`
}
console.log(secondLowest());
