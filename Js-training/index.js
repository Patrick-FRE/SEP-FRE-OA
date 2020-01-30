// data type
// number
// boolean
// string
// undefined
// null
// symbol

// function
// Object

// let / const
// var a = 5;
// var input;

// function foo(input) {
//   input = 6;
//   console.log(input);
//   console.log(a);
// }

// foo(a);
// console.log(input);
// console.log(a);

/// 6 5 undefined 5;

// var obj = { name: "Patrick" };

// function foo(input) {
//   //input.name = "Hello";
//   input = { name: "hello" };
// }

// console.log(obj);
// foo(obj);
// console.log(obj);

// constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Employee(name, age, company) {
//   Person.call(this, name, age);
//   this.company = company;
// }

// class key word
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.salary = 0;
//     this.age = age;
//   }
//   getSalary() {
//     return this.salary;
//   }
// }

// Object.prototype.say = function() {
//   return "hello";
// };

// class Employee extends Person {
//   constructor(name, age, company) {
//     super(name, age);
//     this.company = company;
//   }

//   getSalary(test, salary) {
//     console.log("salary", salary, arguments);
//     return 10;
//   }
// }

// var p = new Person("patrick", 18);
// var p2 = new Person("Jia", 18);
// var test = p.getSalary;
// var test2 = p2.getSalary;
// console.log(test === test2);

// console.log(p.say());
// var employeeP = new Employee("Patrick", 18, "Antra");
// console.log(employeeP.getSalary(5, "hey", 6, 7));

// console.log("=====hoisting=====");

// var a = function() {
//   return 5;
// };
// console.log(a);
// console.log(b);
// var b = function() {
//   return 6;
// };
