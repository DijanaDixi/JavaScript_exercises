// There are two arrays with individual values, write a JavaScript program to compute
// the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]



function sum() {
    var arr1 = [1, 0, 2, 3, 4];
    var arr2 = [3, 5, 6, 7, 8, 13];
    var newArray = [];
    for (var i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
      if (arr1[i] === undefined || arr2[j] === undefined) {
       newArray.push(arr1[i]|| arr2[j])
      } else {
        newArray.push(arr1[i] + arr2[i]);
      }
    }
  
    return newArray;
  }
  console.log(sum());
  