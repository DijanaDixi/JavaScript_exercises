// Write a JavaScript function to create a case-insensitive search. Go to the editor
// Test Data :
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
// "Not Matched"

function case_insensitive_search(string, word) {
  var result = string.search(new RegExp(word, "i"));
  if (result > 0) 
  return "Matched";
  else 
  return "Not Matched";
}
console.log(case_insensitive_search("JavaScript Exercises", "Exercises"));
console.log(case_insensitive_search("JavaScript Exercises", "exercises"));
console.log(case_insensitive_search("JavaScript Exercises", "Exercisess"));
