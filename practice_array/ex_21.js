// Write a JavaScript program to flatten a nested (any depth) array. 
// If you pass shallow, the array will only be flattened a single level. Go to the editor
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

function fla(){
    var array=[1, [2], [3, [[4]]],[5,6]].toString()
    return array.split(',').map(function(number){
        return + number
    })
}
console.log(fla())

// function flatten(arr, shw, flnd = []) {
//     if (shw) return arr.reduce((a, b) => a.concat(b), []);
    
//       arr.forEach(el => {
//           Array.isArray(el) ? flatten(el, shw, flnd) : flnd.push(el);
//       });
//       return flnd;
//   }
//   const arr = [1, [2], [3, [[4, [10, [12]]], 11]],[5,6]];
//   console.log(flatten(arr)); /* [1, 2, 3, 4, 10, 12, 11, 5, 6] */
//   console.log(flatten(arr, true)); /* [1, 2, 3, [[4, [10, [12]]], 11], 5, 6] */
  