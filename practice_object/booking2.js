(function () {
    class Country {
        constructor(name, odds, continent) {
            this.name = name;
            this.odds = odds;
            this.continent = continent;
        }
        getData() {
            var name = this.name;
            var firstLater = name.charAt(0);
            var secondLater = name.charAt(1);
            var output = firstLater + secondLater;
            return output.toUpperCase();
        }
    }

    var country = new Country('srbija',5 , "asia")
    console.log(country.odds)
    var country2 = new Country('Montenegro', 5, "europa")
    console.log(country2.name)

    class Person {
        constructor(name, surname, dateOfBirth) {
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = dateOfBirth;
        }
        getDateOfBirth() {
            return this.name + " " + this.surname + "," + this.dateOfBirth;
        }
    }

    var person1 = new Person("Dijana", "Djordjevic", "26 sep 1986")
    console.log(person1.getDateOfBirth())

    var person2 = new Person("Mios", "Stankovic", "24 aug 1988")
    console.log(person2.getDateOfBirth())

    var person3 = new Person("Maja", "Iic", "26 sep 1985")
    console.log(person3.getDateOfBirth())

    var person4 = new Person("Nevena", "Obilic", "24 aug 1978")
    console.log(person4.getDateOfBirth())

    class Player {
        constructor(person, country, betAmount) {
            this.person = person;
            this.country = country;
            this.betAmount = betAmount;
            Player.prototype.winAmount = function () {
                return this.betAmount * this.country.odds;
            };
        }
        getData() {
            return "\t" + "\t" + this
                .country
                .getData() + ", " + this.winAmount() + " eur,  " + this.person.name + " " + this.person.surname + ", " + this.getBrd() + " years";
        }
        getBrd() {
            var today = new Date().getFullYear();
            var brd = this.person.dateOfBirth;
            var age = new Date(brd).getFullYear();
            return today - age;
        }
    }

    var player1 = new Player(person1, country, 2)
    console.log(player1.getData())

    var player2 = new Player(person2, country2, 3)
    console.log(player2.getData())

    var player3 = new Player(person3, country, 4)
    console.log(player3.getData())

    var player4 = new Player(person4, country2, 5)
    console.log(player4.getData())
  

    class Address {
        constructor(street, number, postalCode, city, country) {
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.number = number;
            this.country = country;
        }
        getData() {
            return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + country.getData();
        }
    }
    var address1 = new Address("Nemanjina", 4, "11 000", "Beograd", "Srbija")
    console.log(address1.getData())

    class BettingPlace {
        constructor(address) {
            this.address = address;
            this.listOfPlayers = [];
        }
        addPlayers(Player) {
            this.listOfPlayers.push(Player);
        }
        totalBet() {
            var total = 0;
            this.listOfPlayers.forEach(function (player) {
                total += player.winAmount();
            });
            return total;
        }
        getData() {
            var listOfPlayers = "";
            this.listOfPlayers.forEach(function (Player) {
                listOfPlayers += Player.getData() + "\n";
            });
            return this.address.street + ", " + this.address.postalCode + " " + this.address.city + " , sum of all bets:" + this.totalBet() + " eur" + "\n" + listOfPlayers;
        }
    }
 
    
    var bettingPlace1 = new BettingPlace(address1);
    bettingPlace1.addPlayers(player1)
    bettingPlace1.addPlayers(player2)
 
    console.log(bettingPlace1.getData())

    var bettingPlace2 = new BettingPlace(address1);
    bettingPlace2.addPlayers(player3)
    bettingPlace2.addPlayers(player4)
    console.log(bettingPlace2.getData())
    var bettingPlace3 = new BettingPlace(address1);
    bettingPlace3.addPlayers(player3)
    bettingPlace3.addPlayers(player4)
    console.log(bettingPlace3.getData())

    class BettingHouse {
        constructor(competition) {
            this.competition = competition;
            this.listOfBettingPlace = [];
            // this.total = this.listOfBettingPlace.length;
        }
        // BettingHouse.prototype.getPlayers=function(){
        //     var sum=0;
        //     this.listOfBettingPlace.forEach(function(player){
        //         sum=sum + BettingPlace.total;
        //     });
        //     return sum;
        // }
        addBettingPlace(bettingPlace) {
            this.listOfBettingPlace.push(bettingPlace);
            // this.total = this.listOfBettingPlace.length
        }
        getSumOfPlace() {
            var sum = 0;
            this
                .listOfBettingPlace
                .forEach(function (bettingPlace) {
                    sum += BettingPlace.length;
                });
            return sum;
        }
        getPlayerCount() {
            var sum = 0;
            this.listOfBettingPlace.forEach(function (BettingPlace) {
                sum = sum + BettingPlace.listOfPlayers.length;
            });
            return sum;
        }
        getData() {
            var listOfBettingPlace = "";
            this.listOfBettingPlace.forEach(function (BettingPlace) {
                listOfBettingPlace += BettingPlace.getData() + "\t";
            });
            return this.competition + ", " + this.getSumOfPlace() + " betting places, " + this.getPlayerCount() + " bet" + "\n" +
                "\t" + listOfBettingPlace + "\t";
            // var competition=this.competition;
            // var places=this.getSumOfPlace;
            // var players=this.getPlayerCount;
            // var output=competition + ", " + places +  " betting places," + players + " bet"  + "\t"+listOfBettingPlace
            //     // return output
            // }
        }
    }

    

    var bettingHouse1 = new BettingHouse("Football World Cup Winner")
    bettingHouse1.addBettingPlace(bettingPlace1)
    bettingHouse1.addBettingPlace(bettingPlace2)
  
    console.log(bettingHouse1.getData())

}())