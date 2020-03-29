// Define a 10 element array. Take the first two letters from every string
// (that has at least 2 letters) in the array and create a new string from them.
//  Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa
function doSomething() {
  var result = "";
  var input = [
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A"
  ];
  input.forEach(word => {
    if (typeof word === "string" && word.length > 1) {
      result += word.substring(0,2);
    }
  });
  return result;
}
console.log(doSomething());
