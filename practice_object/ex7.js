// 7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function subset() {
  var string = "dog";
  var result = "";
  for (var i = 0; i < string.length; i++) {
    console.log((result = string[i]));
    for (var j = i + 1; j < string.length; j++) {
      console.log((result+= string[j]));
    }
  }
}
subset();

String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("dog".sub_String())

var string="dog"
for(var i=0; i<string.length;i++){
    for(var j=i+1; j<=string.length; j++){
        console.log(string.slice(i,j))
    }
}