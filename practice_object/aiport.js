class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getData() {
    // "John", "Snow" -> "John Snow”
    var name = this.name + " " + this.surname;
    return name;
  }
}

class Seat {
  constructor(number, category) {
    this.number =
      parseFloat(number) || Math.floor(Math.random() * (99999 - 10000)) + 10000;
    this.category = category || "E";
  }
  getData() {
    // 12, "B" -> "12, B”
    return this.number + "," + this.category;
  }
}
class Passenger {
  constructor(person, seat) {
    this.person = person;
    this.seat = seat;
  }
  getData() {
    // personObj, seatObj -> 12, B, John Snow
    return this.seat.getData() + ", " + this.person.getData();
  }
}
class Flight {
  constructor(relation, date) {
    this.relation = relation;
    this.date = function() {
      var myDate = new Date(date);
      var day = myDate.getDate();
      var month = myDate.getMonth() + 1;
      var year = myDate.getFullYear();
      var result = day + "-" + month + "-" + year;
      return result;
    };
    this.listOfPassenger = [];
  }
  addPassenger(passenger) {
    this.listOfPassenger.push(passenger);
    this.listOfPassengerlength = this.listOfPassenger.length;
  }
  getData() {
    // 25.10.2017, Belgrade - Paris
    // 1, B, John Snow
    // 2, E, Cersei Lannister
    var data = "";
    this.listOfPassenger.forEach(function(passenger) {
      data += passenger.getData() + "\t" + "\n";
    });
    return this.date() + " " + this.relation + "\n" + data;
  }
}
class Aiport {
  constructor(name) {
    this.name = name;
    this.listOfFlight = [];
  }
  addFlight(Flight) {
    this.listOfFlight.push(Flight);
  }
  totalPessanger() {
    var total = 0;
    this.listOfFlight.forEach(function(Flight) {
      total += Flight.listOfPassenger.length;
    });
    return total;
  }
  getData() {
      var data=""
    this.listOfFlight.forEach(function(Flight) {
  data+=Flight.getData()+"\n"
    });
    return "Aiport:"+" "+this.name+", "+"total passenger: "+this.totalPessanger()+"\n"+data
  }
}

var person1 = new Person("Dijana", "Djordjevic");
var person2 = new Person("Milos", "Stankovic");
var person3 = new Person("Tedy", "Stankovic");
var person4 = new Person("Maja", "Ilic");

var seat1 = new Seat(23, "B");
var seat2 = new Seat("E");
var seat3 = new Seat(2, "E");
var seat4 = new Seat("B");

var passenger1 = new Passenger(person1, seat1);
var passenger2 = new Passenger(person2, seat2);
var passenger3 = new Passenger(person3, seat3);
var passenger4 = new Passenger(person4, seat4);

var flight1 = new Flight("Beograd-Nis", "Oct 25 2020");
var flight2 = new Flight("Beograd-Germany", "Oct 20 2020");

flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
flight2.addPassenger(passenger3);
flight2.addPassenger(passenger4);



var aiport = new Aiport("Nikola Tesla");
aiport.addFlight(flight1);
aiport.addFlight(flight2);
// console.log(aiport.listOfFlight);
console.log(aiport.getData())
