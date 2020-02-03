// ES6
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, company) {
  Person.call(this, name, age);
  this.company = company;
}

var kenny = new Person('Kuanyi', 25);
console.log(kenny);
var employeeOne = new Employee('kuanyi', 25, 'antra');
console.log(employeeOne.name);

// class keyword
// class Employee extends Person {
//   constructor(name, age, company) {
//     super(name, age);
//     this.company = company;
//   }
// }
