// Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]


function filter(){
    var array=[NaN, 0, 15, false, -22, '', undefined, 47, null];
    var newArray=[]
    array.forEach(number=>{
        if(!number ==false){
            newArray.push(number)
        }
    })
   return newArray
}
console.log(filter())