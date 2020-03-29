// Write a program that takes a string and prints its characters out in reversed order in
// the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversed() {
  var input = "Belgrade Institute of Technology";

  return input.split(" ").map(function(word) {
      return word.split("").reverse().join("");
    }).reverse().join(" ");
}
console.log(reversed());
