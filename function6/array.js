function doSomething(array, array1) {
  array.push(...array1);
  return array.filter((element, index) => array.indexOf(element) === index);
}
var output = doSomething([1, 88, 4, 5], [6.7, 4, 99, 8]);
console.log(output);
var sortArray=[...output].sort()
console.log(sortArray)

var arr1=[13,4,6]
var arr2=[9,4,5,6]
var newArray=[...new Set([...arr1,...arr2])]//UKLANJA DUPLIKATE
console.log(newArray)