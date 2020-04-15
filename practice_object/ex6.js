// Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

class BubbleSort {
  constructor(arr) {
    this.arr = arr;
  }
  get sorting() {
    return this.arr.sort(function(a, b) {
      return a - b;
    });
  }
}
var array=[6,4,0, 3,-2,1]
var c1=new BubbleSort(array)
console.log(c1.sorting)