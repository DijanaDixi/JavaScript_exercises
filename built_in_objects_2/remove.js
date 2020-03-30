function removeDuplicates() {
  var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
  var myArray = input.slice("").sort();
  console.log(myArray === input);
  var newArray = [];

  for (var index = 0; index < input.length; index++) {
    var nextElement = myArray[index + 1];
    var element = myArray[index];
    if (element !== nextElement) {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(removeDuplicates());