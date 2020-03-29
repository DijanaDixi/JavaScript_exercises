function concates(array, array1) {
  array.push(...array1);
  return array.sort(function(a, b) {
    return a - b;
  });
}
var output = concates([1, 2, 4, 2, 4, 5], [1, 2, 78]);
console.log(output);

