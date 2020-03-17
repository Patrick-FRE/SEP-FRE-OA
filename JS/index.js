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

class MyPromise {
  constructor(callbackFn) {
    callbackFn(this.resolve.bind(this), () => {});
    // create thenCallbackQueue
    this.thenCallbackQueue = [];
    this.status = "pending";
  }
  resolve(msg) {
    this.status = "fulfilled";
    this.data = msg;
    //console.log(msg);
    // get the callback from the queue
    // call the callback with msg arguement
    console.log(this);
    while (this.thenCallbackQueue.length > 0) {
      let curCallback = this.thenCallbackQueue.shift();
      this.data = curCallback(this.data);
    }
  }
  then(thenCallbackFn) {
    // push the new Callback to the queue
    this.thenCallbackQueue.push(thenCallbackFn);
    return this;
  }
}
// let p = new MyPromise((patrick, rej) => {
//   setTimeout(() => {
//     patrick("hello patrick");
//   }, 1000);
// });

// p.then(data => {
//   console.log(data);
//   return "data2";
// }).then(data2 => {
//   console.log(data2);
// });

function getData() {
  let time = Math.random() * 10000;
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
}

// getData().then(data => {
//   console.log(data);
// });
// getData().then(data => {
//   console.log(data);
// });
// getData().then(data => {
//   console.log(data);
// });

// function MyAll(promiseArray) {
//   let successCount = 0;
//   let finalCount = promiseArray.length;
//   let result = [];

//   return new Promise((res, rej) => {
//     promiseArray.forEach(promise => {
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
// }

// MyAll([getData(), getData(), getData()]).then(function(values) {
//   console.log(values);
// });

// // async // await
