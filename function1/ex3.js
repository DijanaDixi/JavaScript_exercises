// Write a program that checks if a given number is a three digit long number.
// Input: 567
// Result: Yes

function checks(a){
    if(a>99 && a<1000){
        return "yes"
    }else{
        return "no"
    }
}
console.log(checks(4566))