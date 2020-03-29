// Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

function cheks() {
  var array = [5, -4.2, 3, 7];
  var e = 3;

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element === e) {
      return "yes";
    }
  }
  return "no";
}
console.log(cheks());

// skolski primer
function doesElementExist(array, elementToMatch) {
    if (array.length < 1 || !elementToMatch) {
    return false;
    }
    for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (elementToMatch === element) {
    return true;
    }
    }
    return false;
    }
    
    var element = 3;
    var array = [5, -4.2, 3, 7];
    var isMatch = doesElementExist(array, element);
    
    console.log(isMatch ? "yes" : "no");
