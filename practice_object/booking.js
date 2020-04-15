class Country {
  constructor(nameCountry, odds, continent) {
    this.nameCountry = nameCountry;
    this.odds = odds;
    this.continent = continent;
  }
  getCoutry() {
    var name = this.nameCountry;
    var result = name.slice(0, 2);
    return result;
  }
}

// Person
class Person {
  constructor(name, surname, dateOfBrday) {
    this.name = name;
    this.surname = surname;
    this.dateOfBrday = dateOfBrday;
  }
  getData() {
    return this.name + " ," + this.surname + ",  " + this.dateOfBrday;
  }
  getAge() {
    var today = new Date().getFullYear();
    var age = new Date(this.dateOfBrday).getFullYear();
    var fullAge = today - age;
    return fullAge;
  }
}

// Player
class Player {
  constructor(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
  }
  winAmount() {
    return this.country.odds * this.betAmount;
  }
  //   SR, 1050.00 eur, Pera Peric, 29 years
  getData() {
    return (
      this.country.getCoutry() +
      ", " +
      this.winAmount() +
      " , " +
      this.person.name +
      " " +
      this.person.surname +
      ", " +
      this.person.getAge()
    );
  }
}

// Adress
class Adress {
  constructor(country, city, postalCode, streetAndnumber) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.streetAndnumber = streetAndnumber;
  }
  getAdress() {
    return this.streetAndnumber + ", " + this.postalCode + ", " + country.getCoutry();
  }
}

class BettingPlace {
  constructor(adress) {
    this.adress = adress;
    this.listOfPlayers = [];
  }
  addPlayer(Player) {
    this.listOfPlayers.push(Player);
    this.listOfPlayersLength = this.listOfPlayers.length;
  }
  sumAllBets() {
    var sum = 0;
    for (var i = 0; i < this.listOfPlayers.length; i++) {
      sum += this.listOfPlayers[i].betAmount;
    }
    return sum;
  }

  getInfo() {
    var list = "";
    this.listOfPlayers.forEach(function(Player) {
      list += Player.getData() + "\n";
    });
    return (
      this.adress.streetAndnumber +
      " ," +
      this.adress.postalCode +
      "," +
      "\n" +
      list
    );
  }
}

class BettingHouse {
  constructor(competitions) {
    this.competitions = competitions;
    this.listbettingPlace = [];
    
  }
  addPlaces(BettingPlace) {
    this.listbettingPlace.push(BettingPlace);
    this.listbettingPlacelength=this.listbettingPlace.length
  }
}
var country = new Country("srbija", 55, "europa");
var country1 = new Country("nemacka", 35, "europa");
// console.log(country.getCoutry());

var person1 = new Person("Dijana", "Djordjevic", "26 sep 1986");
var person2 = new Person("Milos", "Stankovic", "24 avg 1988");
var person3 = new Person("selena", "Djordjevic", "26 sep 1986");
var person4 = new Person("Tedy", "Stankovic", "24 avg 1988");
// console.log(person1.getData());
// console.log(person1.getAge());

var player1 = new Player(person1, 67, country1);
var player2 = new Player(person2, 70, country);
var player3 = new Player(person3, 97, country1);
var player4 = new Player(person4, 10, country);
// console.log(player1.winAmount());
// console.log(player1.getData());

var adress = new Adress("beograd", 11000, "knez miletina 35");
// console.log(adress.getAdress());

var bettingPlace = new BettingPlace(adress);
bettingPlace.addPlayer(player1);
bettingPlace.addPlayer(player2);
var bettingPlace2 = new BettingPlace(adress);

bettingPlace2.addPlayer(player4);
bettingPlace2.addPlayer(player3);
// console.log(bettingPlace.listOfPlayers);
var bettingHouse = new BettingHouse("Football World Cup Winner");

bettingHouse.addPlaces(bettingPlace);
bettingHouse.addPlaces(bettingPlace2);
console.log(bettingHouse.listbettingPlacelength)
console.log(bettingHouse.listbettingPlace)

// console.log(bettingPlace.listOfPlayersLength);
// console.log(bettingPlace.sumAllBets());
// console.log(bettingPlace.getData());
// console.log(bettingPlace.getInfo());
