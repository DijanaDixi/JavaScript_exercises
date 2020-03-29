// function callBack( element,index, array){
//    console.log('a['+index+']='+ element)
// }
// [2,3,4].forEach(callBack)

// var a=[2,2,3];

// a.forEach(function(element, index){
//     console.log('a['+index+']='+ element)
// })

// function isNumber(num){
//     if(isNaN(num)){
//         return "yes"
//     }else{
//         return "o"
//     }
// }
// console.log(isNumber(NaN))

// function isNumbe(value){
//     return typeof value === "number" && !Number.isNaN(value)
// }
// console.log(isNumbe(3))

function multipl(a, b, c, callback) {
  var i;
  var arr = [];
  for (i = 0; i < 3; i++) {
    arr[i] = callback(arguments[i] * 2);
  }
  return arr;
}
function addOne(a) {
  return a + 1;
}

var myNewArray = multipl(9, 2, 3, addOne);
console.log(Object.prototype.toString.call(myNewArray));
var dixi=myNewArray.slice().sort().reverse();
console.log(dixi)

// var nesto=Array.from(myNewArray)
// console.log(nesto)
// function dijana(myNewArray) {
//   return Array.from(myNewArray).sort();
// }
// console.log(dijana(myNewArray));

var nesto = [1, 3, 7, 4].sort();
console.log(Object.prototype.toString.call(nesto));
