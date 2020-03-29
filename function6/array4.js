//duplicate, sort and filter with build method

function doSomething(array) {
  var newArray = [];
  array.forEach(element => {
    newArray.push(element, element);
  });
  return newArray;
}
var output = doSomething([1, 2, 4, 5, 99, 0]);
console.log(output)
var newS=[...output].sort()//[ 0, 0, 1, 1, 2, 2, 4, 4, 5, 5, 99, 99 ]
console.log(newS===output)//false, jer je kopiran
var news=[...output].filter((element,index)=>output.indexOf(element)===index)
console.log(news)

