// Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function descending(){
    var array=[ 13, 11, 15, 5, 6, 1, 8, 12 ]
    array.sort(function(a,b){
        return a-b
    })
    var newArray=array.reverse()
    return newArray
}
console.log((descending()))