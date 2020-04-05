// Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

function insert(string, word, position) {

//   var position = position || 0;
  if (typeof position === 'undefined') {
    return string;
  }
  if (typeof word === 'undefined') {
   word=""
  }

  return string.slice(0,position)+word+string.slice(position)
}
console.log(insert("We are doing some exercises."));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));
