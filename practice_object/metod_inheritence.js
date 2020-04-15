class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
}
class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job
    this.salary = salary;
  }
  getData() {
    return this.name + " " + this.surname + " " + this.job + " ";
  }
  getSalary() {
    return parseInt(this.salary);
  }
}
class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization
  }
  getSpecialization() {
    return this.specialization;
  }
}
class Manager extends Employee{
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department
  }
  getDepartment() {
    return this.department;
  }
  getData() {
   return super.getData()+this.getDepartment()
  }
changeDepartment(department){
    return this.department=department
}
}
var generalManager = new Manager("Pera", "Mikic", "Project manager", 1200, "IT");
generalManager.changeDepartment("HR")
console.log(generalManager.department)

var output = generalManager.getData() + ", department: " + generalManager.getDepartment();
console.log(output)