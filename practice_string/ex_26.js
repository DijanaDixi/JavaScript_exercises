// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. Go to the editor
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"

// function remove_first_occurrence(string, word) {
//   var newString = string.split(" ");
//   var news = [];
//   for (var i = 0; i < newString.length; i++) {
//     if (newString[i] === word) {
//       delete newString[i];
//     }else{
//         news.push(newString[i])
//     }
//   }
//   return news.join(" ");
// }
// console.log(
//   remove_first_occurrence("The quick brown fox jumps over the lazy dog", "the")
// );
function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index+1 + searchstr.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));