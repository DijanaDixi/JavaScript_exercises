// Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

// const countries = ["Norway", "Noweden", "Denmark", "Now Zealand"];

function firstN() {
  var newCountris = [];
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].startsWith("No")) {
      newCountris.push(countries[i]);
    }
  }
  return newCountris;
}
console.log(firstN());

// const countries = ['Norway', 'Sweden', 'Denmark', 'New Zealand'];

// function sortByFirstLetter(letter) {
//   return function(a, b) {
//     let [firstLetterA, firstLetterB] = [a[0], b[0]];
//     return firstLetterA === letter && firstLetterB !== letter ? -1 : 1
//   }
// }  

// countriess.sort(sortByFirstLetter("N"));

// console.log(countriess);

/////////////////////////////
const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand'];

let startsWithN = countries.filter(function (country) {
  return country[0].toLowerCase() === 'n';
});

console.log(startsWithN)

