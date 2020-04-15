// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function convertString(){
    var string='the quick brown fox'
    var newString=string.split(" ").map(function(word){
        return word.charAt(0).toUpperCase()+word.slice(1)
    }).join(" ")
    return newString
}
console.log(convertString())