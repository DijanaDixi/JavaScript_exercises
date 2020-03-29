// Write a program that calculates the maximum of two given numbers. 
// Input: 4 8
// Result: 8

function calculte(a,b){
    if(a>b){
        return a+ " je vece od " + b
    }else{
        return b + " je vece od " + a
    }
}
console.log(calculte(3,5))