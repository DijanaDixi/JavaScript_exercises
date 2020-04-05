// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even n
// For example if you accept 025468 the output should be 0-254-6-8.

function insertDash(input) {
  var input = "025468";
  var result = ''
  for (var i = 0; i < input.length; i++) {
    var number = input[i];
    var nextElement=input[i+1]
    if (number % 2 === 0 && nextElement %2 === 0) {
      result+=number+"-"
    }else{
        result+=number
    }
  }
  return result
}

console.log(insertDash());
