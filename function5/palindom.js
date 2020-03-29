// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true


function isPlindrome(){
    var string1='My age is 0, 0 si ega ym'
    var string=string1.toUpperCase().split(" ").join("")


    var first=string[0]
    var last=string[string.length-1]
    for(var i=0, j=string.length--; i<string.length, j>=string.length; i++,j--){
        if(first===last){
            return 'yes'
        }

    }
return "no"
}
console.log(isPlindrome())

// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//   palindrome("A man, a plan, a canal. Panama");
