// Write a JavaScript function to test whether a string starts with a specified string. Go to the editor
// Test Data :
// console.log(startsWith('js string exercises', 'js'))

function startsWith(string, word) {
  return string.startsWith(word);
}
console.log(startsWith("js string exercises", "js"));

// function startsWith(input, string) {
//     return input.indexOf(string) === 0;
//   }
//   console.log(startsWith('js string exercises', 'js'));

// function checkStartsWith(str, search) 
//        {
//            let regex = new RegExp("^" + search),
//                check = regex.test(str);
//            return check;
//        }
//        console.log(checkStartsWith('js string exercises', 'js'));
