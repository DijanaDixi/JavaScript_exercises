// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]


function deleteElement(){
    var array= [4, 6, 2, 8, 2, 2]
    var element=2
    var newArray=[]
    array.forEach(number=>{
        if(number===element){
            delete number
        }else{
            newArray.push(number)
        }
    })
    return newArray
}
console.log(deleteElement())