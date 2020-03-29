// Write a function to convert string into an array. 
// Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function convert(){
    var string="My random string"
    var newArray=[]
    string.split("").forEach(letter=>{
        if(letter===" "){
           newArray.push(null)
        }else{
          newArray.push(letter)
        }
    })
    return newArray
}
console.log(convert())


// function convert() {
//     var input = "my random string";
//     var array = [];
//     for (var i = 0; i < input.length; i++) {
//       if (input[i] === " ") {
//         array[i] = null;
//       } else {
//         array[i]=input[i];
//       }
//     }
//     return array;
//   }
//   console.log(convert());
  