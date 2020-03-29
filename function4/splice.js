var array=[1,2,3,4]
var array1=array
array.splice(2,0,1)
console.log(array===array1)//true

var arr=[1,2,3,5,6]
var arr1=[...arr]
// arr1.splice(0,0,5)na pocetak reda
arr1.push(5)//na kraju reda
console.log(arr1)
console.log(arr===arr1)//false