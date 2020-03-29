function doSomething(array) {
  var newArray = [];
  array.forEach(element => {
    newArray.push(element, element);
  });
  return newArray;
}
var output = doSomething([1, 6, 5, 4]);//[1,1,6,6..]
console.log(output);

function remove() {
  var array = [1, 4, 8, 4, 5, 6];
  var newArray = [...array].sort();
  var secondArray = [];
  newArray.forEach((element, index) => {
    var element = newArray[index];
    var nextElement = newArray[index + 1];
    if (element !== nextElement) {
      secondArray.push(element);
    }
  });
  return secondArray;
}
console.log(remove());
