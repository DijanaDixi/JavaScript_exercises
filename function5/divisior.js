// Write a program that calculates the greatest common divisor of two integers.
// Note: The greatest common divisor of two non-zero integers is the greatest
// positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

function commonDivisior() {
  var a = 192;
  var b = 42;
  var a = Math.abs(a),
    b = Math.abs(b),
    min = Math.min(a, b);
  for (var i =min; i>0; i--) {
    if (a % i === 0 && b % i === 0) {
        return i
    }
  }
  
}
console.log(commonDivisior());

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(192,42));

// 
// I think my example will be more understandable for beginners:
function greatestCommonDivisor(n1, n2){
var gcd;
for(var i = 0; i <= Math.max(n1, n2); i++){
if(n1 % i === 0 && n2 % i === 0) gcd = i;
}
return gcd;
}
console.log(greatestCommonDivisor(2154, 458)); //output: 2
// function greatestDivider(input1, input2) {
    var smaller = 0;
    var result = 1;

    if (input1 < input2) {
        smaller = input1;
        bigger = input2;
    } else {
        smaller = input2;
        bigger = input1;
    }

    if (bigger % smaller == 0) {
        return smaller;
    } else {
        for (i = 2; i < smaller; i++) {
            if (input1 % i == 0 && input2 % i == 0) {
                result *= i;
            }
        }
        return result;
    }
}

document.write(greatestDivider(9, 90));
