//  Write a JavaScript program to find a pair of elements (indices of the two numbers)
//   from an given array whose sum equals a specific target number. Go to the editor

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

function findPair(){
    var array=[10,20,10,40,50,60,70,10,40]
    var target=50;
    for(var i=0; i<array.length; i++){
        var el=array[i]
        var next=array[i+1]
        if((el+next)==target){
            return `${i} ${i+1}`
            
        }
    }
}
console.log(findPair())

// function findMe(arr, target){
// 	var output = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		for (var k = i+1; k < arr.length; k++) {
// 			if (arr[i]+arr[k]==target) {
// 				output.push("Array[" + i + "] + Array[" + k +"] = "+ target);
// 			}
// 		}
// 	}
// 	return output;
}
console.log(findMe([10,20,10,40,50,60,70], 50));
//output: ["Array[0] + Array[3] = 50", "Array[2] + Array[3] = 50"]