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

// function myAdd() {
//   let sum1 = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum1 += arguments[i];
//   }
//   return function() {
//     let sum2 = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return function() {
//       let sum3 = 0;
//       for (let i = 0; i < arguments.length; i++) {
//         sum3 += arguments[i];
//       }
//       return sum1 + sum2 + sum3;
//     };
//   };
// }

// function myAdd2() {
//   let arr1 = Array.from(arguments);
//   const sum1 = arr1.reduce((c, cur) => {
//     return c + cur;
//   }, 0);
//   return function() {
//     let arr2 = Array.from(arguments);
//     const sum2 = arr2.reduce((c, cur) => {
//       return c + cur;
//     }, 0);
//     return function() {
//       let arr3 = Array.from(arguments);
//       const sum3 = arr3.reduce((c, cur) => {
//         return c + cur;
//       }, 0);
//       return sum1 + sum2 + sum3;
// Arrow function
// let testObj = {
//   name: "patrick"
// };

// let obj = {
//   foo: () => {
//     console.log(this);
//   },
//   foo2: function() {
//     console.log(this);
//   }.bind(this)
// };

// obj.foo2();

// apply call bind

//let myfoo2 = obj.foo2;
// console.log(myfoo2);

// myfoo2();

// function main() {
//   myfoo2();
// }
// main();

// destructure

// let obj = { name: "patrick" };
// let name = obj.name;
// let age = obj.age;
// //let { name, age } = obj;
// console.log(name, age);

// spread operator
// let obj = { name: { value: "patrick" }, age: new Date() };

// console.log(JSON.parse(JSON.stringify(obj)));

// let obj3 = obj; // shadow copy

// obj3.name = "changed";
// console.log("obj", obj);
// console.log("obj3", obj3);

// let obj2 = { ...obj };

// console.log("obj", obj);
// console.log("obj2", obj2);
// console.log(obj2 === obj);
// console.log(obj2.name === obj.name);

// let a = { name: "patrick" };
// let b = { name: "patrick" };
// console.log(a == b);

// rest operater

// function foo(hey, a, b, c, ...hello) {
//   console.log(arguments);
//   console.log(hello);
// }

// foo(1, 2, 3, "hello");

// closure

// function outer() {
//   let outerData = 5;
//   return function inner() {
//     console.log(outerData);
//   };
// }

// let a = outer();
// console.log(a);

// IIFE
// module design patter
// let counter = (function() {
//   count = 0;
//   return {
//     increament: function() {
//       count++;
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// })();
// counter.increament();
// console.log(counter.getCount());

// currying

// const myAdd = (...num) => (...num2) => (...num3) =>
//   [...num, ...num2, ...num3].reduce((acc, cur) => acc + cur, 0);
// let res = myAdd(5, 5, 3)()(5, 8, 1);
// console.log(res); // 16;

// function myAdd(...num) {
//   let sum = num.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   return function(...num2) {
//     let sum2 = num2.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);
//     return function(...num3) {
//       let sum3 = num3.reduce((acc, cur) => {
//         return acc + cur;
//       }, 0);
//       return sum + sum2 + sum3;
//     };
//   };
// }

// const myAdd3 = (...num) => (...num2) => (...num3) =>
//   [...num, ...num2, ...num3].reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);

// let res = myAdd(5, 5, 3)()(5, 0);
// let res2 = myAdd2(1, 1, 1)(2, 2, 2)(3, 3, 3);
// let res3 = myAdd3(1, 1, 1)(2, 2, 2)(3, 3, 3);
// console.log(res, res2, res3);

// function myFetch(url) {
//   const p = new Promise((resolve, reject) => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         resolve({
//           json: function() {
//             return JSON.parse(xhttp.responseText);
//           }
//         });
//       }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
//   });
//   return p;
// }

// myFetch("https://jsonplaceholder.typicode.com/todos/")
//   .then(response => response.json())
//   .then(data => console.log(data));

// function myFetch2(url) {
//   const p = new Promise((resolve, reject) => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         resolve({
//           json: function() {
//             return JSON.parse(xhttp.responseText);
//           }
//         });
//       } else if (this.readyState == 4 && this.status == 404) {
//         throw "404 not found";
//       }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
//   });
//   return p;
// }

// myFetch2("https://jsonplaceholder.typicode.com/todos/").catch(error =>
//   console.log(error)
// );

// Promise.myAll = function(arr) {
//   // if all promises in the arr fulfils, passed the results as a new arry to user defined fn
//   const res = [];
//   for(let i = 0; i<arr.length;i++){
//     // check if each promise resolves or reject

//   }
//   return {
//     myThen: function(fn) {
//       fn(res);
//     }
//   };
// };

// class MyPromise {
//   constructor(callback) {
//     callback(this.resolve.bind(this), () => {});

//     // then callback queue
//     this.cbQueue = [];
//   }
//   resolve(msg) {
//     this.data = msg;
//     // get the callback from then queue
//     // for (let i = 0; i < this.cbQueue.length; i++) {
//     //   // call the callback with msg arguments
//     //   this.cbQueue[i](msg);
//     // }
//     while (this.cbQueue.length > 0) {
//       let currentCb = this.cbQueue.shift();
//       this.data = currentCb(this.data);
//     }
//   }

//   reject(msg) {
//     console.log(msg);
//   }
//   then(thenCallback) {
//     // push the new callback to the queue
//     this.cbQueue.push(thenCallback);
//     console.log(this);
//     return this;
//   }
// }

// let p = new MyPromise((res, rej) => {
//   setTimeout(() => {
//     res("something");
//   }, 5000);
// });

// p.then(data => {
//   console.log("1", data);
//   return "first round";
// })
//   .then(data => {
//     console.log("2", data);
//     return "second round";
//   })
//   .then(data => {
//     console.log("3", data);
//     return "third round";
//   });

// console.log(p);

// function getData() {
//   let time = Math.random() * 1000;
//   console.log(time);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(time);
//     }, time);
//   });
// }

// getData().then(data => console.log(data));
// getData().then(data => console.log(data));
// getData().then(data => console.log(data));

// Promise.myAll = function(promiseArr) {
//   // if all promises in the arr fulfils, passed the results as a new arry to user defined fn

//   return new Promise((res, rej) => {
//     let successCount = 0;
//     let finalCount = promiseArr.length;
//     let result = [];

//     promiseArr.forEach(promise => {
//       promise.then(data => {
//         console.log(data);
//         result.push(data);
//         successCount++;

//         if (successCount === finalCount) {
//           res(result);
//         }
//       });
//     });
//   });
// };

// Promise.myAll([getData(), getData(), getData()]).then(values =>
//   console.log(values)
// );

// function lastOne() {}
/// string template
// let world = "world";
// let a = "hello \n" + world;
// let b = `hello
// ${world}`;
// console.log(a);
// console.log(b);
// 1 4 0 3 2
// setTimeout(() => {
//   console.log(0);
// }, 0);
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// setTimeout(() => {
//   console.log(3);
// }, 500);
// console.log(4);

// function foo() {
//   function foo2(val) {
//     return function() {
//       console.log(val);
//     };
//   }
//   for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//       let j = foo2(i);
//       j();
//     }, 1000);
//   }
// }
// foo();
/// 9 - 10
/// 10 - 10

// class Animal {
//   constructor(name, fn) {
//     this.name = name;
//     fn(this.speak.bind(this));
//   }
//   speak() {
//     console.log(this);
//   }
// }

// function s(a) {
//   a();
// }
// function y(b) {
//   b();
// }

// function Animal(name, fn) {
//   this.name = name;
//   fn(this.speak);
// }

// Animal.prototype.speak = function() {
//   console.log(this);
// };

// const myAnimal1 = new Animal(1, s);

// const myAnimal2 = new Animal(2, y);
