// Write a function that concatenates a given string n times (default is 1).

// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function doSomething(string, n) {
  var res = "";
  if (typeof n === "undefined") {
    return string;
  }
  for (var i = 0; i < n; i++) {
    res += string;
  }
  return res
}
console.log(doSomething("bla", 2));
