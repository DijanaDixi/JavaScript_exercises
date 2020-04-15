class Product {
  constructor(name, price, expirationDate) {
    this.id = Math.floor(Math.random() * (99999 - 10000)) + 10000;
    this.name = name;
    this.price = parseFloat(price);
    this.expirationDate = new Date(expirationDate);
    this.ex = this.expirationDate.getTime();
  }
  getName() {
    var nameProduct = this.name;
    var result = nameProduct.charAt(0) + nameProduct[nameProduct.length - 1];
    return result;
  }
  getInfo() {
    return this.getName() + this.id + ", " + this.name + ", " + this.price;
  }
}

class ShoppingBag {
  constructor() {
    this.listOfProduct = [];
  }
  addProduct(Product) {
    var today = new Date();
    today = today.getTime();
    for (var i = 0; i < arguments.length; i++) {
      if (Product.ex > today) {
        this.listOfProduct.push(Product);
        this.listOfProductlength = this.listOfProduct.length;
      }
    }
  }
  getMostExpensive() {
    var mostExpensive = this.listOfProduct[0].price;
    for (var i = 0; i < this.listOfProduct.length; i++) {
      if (this.listOfProduct[i].price > mostExpensive) {
        mostExpensive = this.listOfProduct[i].getInfo();
      }
    }
    return mostExpensive;
  }
  calculateTotalPrice() {
    var sum = 0;
    for (var i = 0; i < this.listOfProduct.length; i++) {
      sum += this.listOfProduct[i].price;
    }
    return sum;
  }
}

class PaymentCard {
  constructor(accountBalance, validDate) {
    this.accountBalance = parseFloat(accountBalance);
    this.validDate = new Date(validDate);
    this.expDate = function() {
      var today = new Date();
      if (this.validDate.getTime() >= today.getTime()) {
        return "active";
      } else {
        return "inactive";
      }
    };
  }
}

function CheckAndBuy(PaymentCard, ShoppingBag) {
    var total = ShoppingBag.calculateTotalPrice();
    var account=PaymentCard.accountBalance
    if (account>= total) {
      return "sucssesful";
    } else {
      return "no sucssesful";
    }
  }


var banana = new Product("banana", 87.899, "2024-01-09");
var grejp = new Product("grejp", 123.99, "2030-03-09");
console.log(banana.getInfo());

var shoppingBag = new ShoppingBag();
shoppingBag.addProduct(banana);
shoppingBag.addProduct(grejp);
console.log(shoppingBag.listOfProduct);

var paymentCard = new PaymentCard(546, "2024-01-09");
console.log(paymentCard.expDate())

console.log(shoppingBag.listOfProductlength);
console.log(shoppingBag.getMostExpensive());
console.log(shoppingBag.calculateTotalPrice());
console.log(CheckAndBuy(paymentCard,shoppingBag));
