// Initialize two arrays. The first one should contain student names,
// the second one the number of points for each student.
// Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ],
//  [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete

function doSomething() {
  var array = [
    "Micahel",
    "Anne",
    "Frank",
    "Joe",
    "John",
    "David",
    "Mark",
    "Bill"
  ];
  var array2 = [50, 39, 63, 72, 99, 51, 83, 59];

  for (var i=0,j=0; i<array.length, j<array2.length; i++, j++) {
    
      if (array2[j]>50 && array2[j]<60) {
        console.log(`${array[i]} acquired ${array2[j]} points and earned 6.`);
      } else if (array2[j]> 60 && array2[j]< 70) {
        console.log(`${array[i]} acquired ${array2[j]} points and earned 7.`);
      } else if (array2[j]> 70 && array2[j] < 80) {
        console.log( `${array[i]} acquired ${array2[j]} points and earned 8.`);
      } else if (array2[j] > 80 && array2[j]< 90) {
       console.log(`${array[i]} acquired ${array2[j]} points and earned 9.`);
      } else if (array2[j]> 90) {
        console.log(`${array[i]} acquired ${array2[j]} points and earned 10.`);
      } else if (array2[j]<=50) {
       console.log(`${array[i]} acquired ${array2[j]} points and failed to complete.`);
      }
    }
  
  }
 

console.log(doSomething());
