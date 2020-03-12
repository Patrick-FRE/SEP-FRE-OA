//primative type data
// var a = 5;
// console.log("a", typeof a);
// var b = 5.5;
// console.log("b", typeof b);
// var c = "abc";
// console.log("c", typeof c);
// var d = true;
// console.log("d", typeof d);
// var e = null;
// console.log("e", typeof e);
// var f = undefined;
// console.log("f", typeof f);
// var g = Symbol();
// console.log("g", typeof g);

// Objects
// var j = { name: "patrick", age: 18 };
// var h = new Object({});

// class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   say(msg) {
//     console.log(msg);
//   }
//   getSalary(a) {
//     return a;
//   }
// }

// class Employee extends Person {
//   constructor(name, age, company) {
//     super(name, age);
//     this.company = company;
//   }
//   say() {}
//   getSalary(a, b) {
//     return a + b;
//   }
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.say = function(msg) {
//   console.log(msg);
// };

// function Employee(name, age, company) {
//   Person.call(this, name, age);
//   this.company = company;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;
// let p = new Employee("patrick", 18, "Antra");
// console.log(p.say("hello"));
// console.log(p);

// let a = [1, 2, 3];
// Array.prototype.myForEach = function(cbFn) {
//   for (let i = 0; i < this.length; i++) {
//     cbFn(this[i]);
//   }
// };
// Array.prototype.myMap = function() {};

// let res = a.myMap(item => item * 2);
// console.log(res);

// a.myForEach(item => {
//   console.log("hello", item);
// });

// forEach() vs Map()
// a.forEach((item, index, array) => {
//   console.log(this);
// });
// console.log(a);

// let p = new Person(18);
// let p2 = new Person(18);
// console.log(p.name === p2.name);

// let a = { name: "patrick" };
// let b = { name: "patrick" };
// console.log(a == b);

// var a = "abc";
// function foo(input) {
//   input = "abcd";
//   console.log(input);
// }
// foo(a);
// console.log(a);

// var a = { name: "patrick" };

// function foo(input) {
//   input = 5;
// }
// foo(a);
// console.log(a);

// p.say("hello");

// function foo(name) {
//   console.log("one", name);
// }

// function foo(name, age) {
//   console.log("two", name, age);
// }

// foo("patrick");

//var a = { name: "patrick" };
// function a() {}
// a.age = 18;
// console.log(a);

// prototype
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let p = new Person("patrick");

// const obj = { name: "patrick", age: 18 };

// Object.prototype.forEach = function(cbFn) {
//   let keys = Object.keys(this);
//   //console.log(keys);
//   for (let i = 0; i < keys.length; i++) {
//     cbFn(keys[i], this[keys[i]]);
//   }
// };

// obj.forEach((key, value) => {
//   console.log(key, value);
// });

//
//'name','patrick'
//'age',18

// for (let key in obj) {
//   console.log(key);
// }
// let str = "name";

// obj.str = "changed";
// obj[str] = "changedAgain";

// console.log(obj);

//obj.forEach();
// class AntraMath {
//   constructor(num) {
//     this.val = num;
//   }
//   add(num) {
//     this.val += num;
//     return new AntraMath(this.val);
//   }
//   multiply(num) {
//     this.val *= num;
//     return new AntraMath(this.val);
//   }
//   done() {
//     return this.val;
//   }
// }

// let myMath = new AntraMath(10);
// let res = myMath
//   .add(5)
//   .multiply(2)
//   .done();

// console.log(res); // 30
// Object.denfineProperty
// class State {
//   constructor(name, age) {
//     this._person = { name: name, age: age };
//   }
//   get person() {
//     console.log("get");
//     return this._person;
//   }
//   set person(newPerson) {
//     console.log("set");
//     this._person = newPerson;
//   }
// }

// let state = new State("patrick", 18);
// state.person.name = "changed";
// console.log(state.person);
// state.person = { name: "changed", age: 18 };

// var let const
// console.log(foo);
// function foo() {
//   // console.log(a);
//   // if (true) {
//   //   console.log(b);
//   //   var a = 5;
//   //   let b = 6;
//   // }
//   // console.log(a);
// }
// var foo = () => {};
// foo();
// const obj = 5;

function foo() {}
