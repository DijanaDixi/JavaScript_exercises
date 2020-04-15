// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// class Employee extends Person {
//   constructor(name, job) {
//     super(name);
//     this.job = job;
//   }
//   getJob() {
//     return `${super.getName()} ${this.job}`;
//   }
// }

// var person = new Person("MILOS");
// console.log(person.name);

// var employee = new Employee(person, "menager");
// console.log(employee.getJob());

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    this.name + "jede";
  }
}
class Cat extends Animal{
    speak(){
        return this.name+" SPAVA"
    }
}
var c=new Cat("CICA")
console.log(c.speak())