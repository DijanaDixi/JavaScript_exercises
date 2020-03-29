// Write a program that checks if the entered number is a prime number 
// (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

function primeNumber(){
    var number=15||17
    if(number===1){
        return false
    }else if(number===2){
        return true
    }
    for(var i=2;i<number; i++){
        if(number%i===0){
            return false
        }
    }
    return true
}
console.log(primeNumber())