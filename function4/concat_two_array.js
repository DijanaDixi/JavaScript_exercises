// Write a program that intertwines two arrays.
//  You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwines() {
  let input1 = [4, 5, 6, 2];
  let input2 = [3, 8, 11, 9];
  input1.push(...input2);
  return input1.sort(function(a, b) {
    return a - b;
  });
}
console.log(intertwines());
console.log();

function concate() {
  let input11 = [4, 5, 6, 2, 3,'pt'];
  let input22 = [3, 8, 11, 9];
  let primes = Array.from(new Set([...input11, ...input22]));
  return primes;
}
console.log(concate());

function mergeUnique() {
 let arr1 = [1, 2, 3];
  let arr2 = [3, 2, 1, "prince"];
  return arr1.concat(arr2.filter(function(item) {
      return arr1.indexOf(item) === -1;
    })
  );
}
console.group(mergeUnique())


var a = [1, 2, 3], b = [101, 2, 1, 10]
var c = a.concat(b)
var d = c.filter((item, pos) => c.indexOf(item) === pos)

console.log(d) // d is [1, 2, 3, 101, 10]

// 
Array.prototype.merge = function(/* variable number of arrays */){
    for(var i = 0; i < arguments.length; i++){
        var array = arguments[i];
        for(var j = 0; j < array.length; j++){
            if(this.indexOf(array[j]) === -1) {
                this.push(array[j]);
            }
        }
    }
    return this;
};
var test = ['a', 'b', 'c']; console.log((test))

function removeDuplicates() {
    var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
    var myArray = input.slice("").sort();
    console.log(myArray)
    var newArray = [];
  
    for (var index = 0; index < input.length; index++) {
      var nextElement = myArray[index + 1];
      var element = myArray[index];
      if (element !== nextElement) {
        newArray.push(element);
      }
    }
    return newArray;
  }
  console.log(removeDuplicates());