// . Write a JavaScript program to find duplicate values in a JavaScript array.

function duplicate() {
  var array = [1, 2, 3, 4,7,4];
  var newArray =array.filter((element,index)=>array.indexOf(element)===array.lastIndexOf(element))
  return newArray.toString()
 
}

console.log(duplicate());
function test(arr){
    var result = [];
    for (var i = 0; i < arr.length-1; i++){
    for (var j = i+1; j < arr.length; j++){
       
    if (arr[i] == arr[j] && result.indexOf(arr[i]) == -1){
    result.push(arr[i]);
    }
    }
    }
    return result;
    }
    console.log(test([1, 2, 3, 4,7,4]));