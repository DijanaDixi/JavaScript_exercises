// Write a JavaScript function to count the occurrence of a substring in a string. Go to the editor
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

// function count(){
//     var string="The quick brown fox jumps over the lazy dog"
//     var word="the"
//     return string.match(/the/gi).length

// }
// console.log(count())

function count() {
  var string = "The quick theo theooo the brown fox jumps over the lazy dog the the the".toLowerCase();
  var word = "the";

  var newString = string.split(" ")
  var counte = 0;
  for (var i = 0; i < newString.length; i++) {
    if (newString[i]=== word) {
      counte++
    }
    
  }
  return counte;
}

console.log(count());

count = function (str, search) {
    var count = 0;
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    for (var i = 0; i < str.length; i++) {
    if (str.substr(i, search.length) == search) {
    count++;
    }
    }
    return count;
    }
    console.log(count("The quick brown aaa fox jumps theo over the aaa lazy dog", 'aaa'));
    console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));//da li startuje sa fox


    // function count(str, substr) {
    //     str = str.split(" ");
    //     return str.filter(a => a.toLowerCase() === substr).length;
    // }
    // console.log(count("The quick brown fox jumps over the lazy dog", 'the')); /* 2 */
    // console.log(count("The quick brown fox jumps over the lazy dog", 'fox')); /* 1 */