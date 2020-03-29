// Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insertGivenString(){
    var array=[2, -2, 33, 12, 5, 8];
    var element=78;
    var position=3;
    array.splice(position,0,element)
    return array
}
console.log(insertGivenString())