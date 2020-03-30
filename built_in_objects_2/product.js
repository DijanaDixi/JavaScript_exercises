// Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

function totalePrice(product) {
  var total = 0;

  for (var i = 0; i < product.length; i++) {
    total += product[i].price;
  }
  return total;
}
var product = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 }
];
console.log(totalePrice(product));

function averageProduct(product) {
  var average = 0;
  for (var i = 0; i < product.length; i++) {
    var length = product.length;

    average += product[i].price;
  }
  return (average / length).toFixed(3);
}
console.log(averageProduct(product));

function mostExpensiveProduct(product) {
  var mostEx = product[0];

  for (var i = 0; i < product.length; i++) {
    if (product[i].price > mostEx.price) {
      mostEx = product[i];
    }
  }
  return mostEx.name.toUpperCase();
}

console.log(mostExpensiveProduct(product));

// function expensive(product) {
//   for (i = 0; i < product.length; i++) {
//       return Math.min(...product[i].price)
//   }
// }
// console.log(expensive(product));
