// Write a JavaScript function to truncate a string to a certain number of words. Go to the editor
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"

function truncate(string, position) {
  var newString = string.split(" ");
  var newString2=[]
  for (var i = 0; i < newString.length; i++) {
      if(i<position){
          newString2.push(newString[i])
      }

  }
  return newString2.join(" ")
}
console.log(truncate("The quick brown fox jumps over the lazy dog", 4));

function truncate(string, position) {
  var newString = string.split(" ");
  //   var element=newString[position]
 return  newString.slice(0, position).join(" ")
}
console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
