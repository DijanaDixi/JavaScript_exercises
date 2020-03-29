"use strict";
// Write a function that calculates
// the total price of your shopping list.
// var shoppingList = [
//   { name: "apples", price: 100 },
//   { name: "juice", price: 99 },
//   { name: "bananas", price: 150 }
// ];
// function totalPrice(input) {
//   var total = 0;
//   for (var i = 0; i < input.length; i++) {
//     total += input[i].price;
//   }
//   return total / input.length;
// }
// var output = totalPrice(shoppingList);
// console.log(output);
var shoppingList1 = [
  { name: "apples", price: 100 },
  { name: "juice", price: 80 },
  { name: "bananas", price: 150 }
];
let result = shoppingList1.map(element => element.price);
var max = Math.max(...result);
var index = result.indexOf(max);
var r = shoppingList1[index].name.toUpperCase();

console.log(r);

function mostExpensive(shoppingList1) {
  var expensive = shoppingList1[0];
  for (var i = 0; i < shoppingList1.length; i++) {
    if (shoppingList1[i].price > expensive.price) {
      expensive = shoppingList1[i];
    }
  }
  return expensive.name.toUpperCase()
}
var shoppingList1 = [
  { name: "apples", price: 100 },
  { name: "juice", price: 80 },
  { name: "bananas", price: 150 }
];
var output = mostExpensive(shoppingList1);
console.log(output);
