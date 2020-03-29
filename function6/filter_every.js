function remove() {
  var array = [3, 88, 5, 8, 7, 7];
  var newArray = array.slice("").sort();
  var myArray = [];
  newArray.forEach(function(element, index) {
    var element = newArray[index];
    var next = newArray[index + 1];
    if (element !== next) {
      myArray.push(element);
    }
  });
  return myArray;
}
console.log(remove());

function check(element, index) {
  return indexOf(element) === index;
}

var array1 = [8, 4, 5, 6, 75, 5, 6];
var newArray1 = array1.filter(
  (element, index) => array1.indexOf(element) === index
);
console.log(newArray1);

var arr2 = [2, 4, 5];
var arr3 = [5, 6, 2];
var newArray3 = [...new Set([...arr2, ...arr3])];
console.log(newArray3);

var nesto = [1, 4, 5, 6, 7].every(element => element % 2 === 1);


console.log(nesto);
