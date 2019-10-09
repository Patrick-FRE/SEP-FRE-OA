/**
 *  undefined
 *  string
 *  number
 *  null
 *  boolean
 *
 *
 *  Object
 *  function
 */

// var a = "1";
// var b = 1;

// var c = { name: "a" };
// var d = { name: "a" };

// console.log(a == b);
// console.log(c == d);

// === vs ==

// console.log(5 + 6 + "Hello");
// console.log("hello" + 5 + 6);

// console.log("" == 0);

// var a = 11 + "";
// var b = +"11";
// console.log(typeof a);
// console.log(typeof b);

// function foo() {
//   console.log(a);
// }
// foo();

// var a = null;
// var b = { name: "patrick" };
// b = {

// };

// function foo(input) {
//   input.name = "jinwei";

//   for(){

//   }
// }
// foo(b);
// console.log(b);

// var a = new Object();
// var b = {};
// var c = Object.create({});

// console.log(a, b, c, d);

// function Person(name) {
//   this.name = name;
// }

// var c = new Person("p");

// console.log(c);

// function mainA() {
//   var a = "a";
//   console.log(c);

//   function B() {
//     var b = "b";

//     function C() {
//       var c = "b";

//       console.log(a);
//     }
//   }
// }

// function fooA() {
//   for (i = 1; i < 10; i++) {
//     let a = 5;
//   }
// }

// setTimeout(() => {
//   console.log("hello");
// }, 5000);

// function hoistFoo() {
//   var a;
//   console.log(a);
//   a = 5;
// }

//fooA();
// console.log(this);

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);
// setTimeout(() => {
//   console.log(4);
// }, 0);
// console.log(5);

/**
 * 1
 * 3
 * 5
 * 4
 * 2
 *
 * 1
 * 3
 * 4
 * 5
 * 2
 *
 */

// function a(callback) {
//   var random = Math.random() * 1000;
//   setTimeout(() => {
//     var data = "data";
//     console.log(data);
//     if (data === "data") {
//       callback();
//     } else {
//       throw new Error();
//     }
//   }, random);
// }

// function b(callback) {
//   setTimeout(() => {
//     console.log("b");
//     callback();
//   });
// }

// function c() {
//   setTimeout(() => {
//     console.log("c");
//   });
// }

// a(b(c));

// function foo() {
//   for (var i = 0; i < 10; i++) {
//     (function() {
//       var temp = i;
//       setTimeout(function() {
//         console.log(temp);
//       });
//     })();
//   }
// }

// function foo() {
//   for (let i = 0; i < 10; i++) {

//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }
// }

// foo();

// function add(num) {
//   var addBase = num;

//   return function() {
//     console.log(addBase);
//   };
// }

// var a = add(5);
// var b = add(6);

// function test() {
//   var a = "a";
//   console.log(a);
// }

// test();

// console.log(foo(2)(3)(2)); // output 24;

// function foo(a) {
//   // closure
//   return function(b) {
//     // closure
//     return function(c) {
//       // closure
//       console.log(a, b, c);
//       return a * b * c;
//     };
//   };
// }

// console.log(hey);

// function hey() {
//   console.log("hey");
// }

// var hey = function() {
//   console.log("hey");
// };
// hey.test = "hahah";

// function hey2() {}
// hey2.test = "dsfsdf";
// console.log(hey);
// console.log(typeof hey2);

// const foo = () => {};

// const foo = function() {}.bind(this);

// var a = [];
// console.log(typeof a);

// var a = new Number(5);
// console.log(typeof a);

// class A {
//   constructor(lname, age) {
//     this.age = age;
//   }
//   move() {
//     console.log("move");
//   }

//   get lastName() {
//     console.log("get called");
//     return this._lastName;
//   }

//   set lastName(value) {
//     console.log("set called");
//     this._lastName = value;
//   }
// }

// var a = new A("lin", 26);
// a.lastName = "lin";
// a.lastName;

//console.log(A.lastName);

// console.log(A);
// class A {}

// var hey = (res, reject) => {
//   res();
//   reject();
// };
// class PromiseP {
//   constructor(cb) {
//     cb(this.resolve, this.reject);
//   }

//   resolve() {
//     console.log("res");
//   }
//   reject() {
//     console.log("rej");
//   }
// }

// var p = new PromiseP(hey);

// function myAjaxCall(url) {
//   return new Promise((res, rej) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => res(xhr.responseText);
//     xhr.onerror = () => rej(xhr.response);
//     xhr.send();
//   });
// }
// var a = myAjaxCall("https://placeholder.typicode.com/todos/1");
// a.then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });
// function secondCall(val) {
//   console.log(val);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("second call");
//     }, 5000);
//   });
// }

// var a = myAjaxCall();
// a.then(data => {
//   console.log("data:");
//   console.log(data);
// });
//console.log(a);
// patrick = "patrick@@@@";

// const myString = `
// hey
// ${patrick}
// hey""""
// |<><><>
// `;

// const myString2 = "\n" + "hey" + "\n" + patrick;

// console.log(myString);

// let ind = 100;
// let foo = {
//   ["answer" + ind](x) {
//     return ind === x;
//   }
// };

// foo["answer100"+100]
// foo.answer100

// console.log(foo);

// class Player {}

// class TTTPlayer extends Player {}

// var a = new TTTPlayer();

// console.log(a instanceof Object);
// var obj = { a: "1", b: "2", c: "3" };

// // for (let n in obj) {
// //   console.log(obj[n]);
// // }
// if (!Object.prototype.forEach) {
//   Object.defineProperty(Object.prototype, "forEach", {
//     value: function(callback, thisArg) {
//       if (this == null) {
//         throw new TypeError("Not an object");
//       }
//       thisArg = thisArg || global;
//       for (var key in this) {
//         if (this.hasOwnProperty(key)) {
//           callback.call(thisArg, this[key], key, this);
//         }
//       }
//     }
//   });
// }

// obj.forEach(item => {
//   console.log(item);
// });

// var a = [1, 3, 4];
// var more = [3, 4, 5];
// // var b = a.concat(more);
// // console.log(b);
// // console.log(a === b);
// var c = [...a, "hey", ...more];
// console.log(c);
// console.log(c === a);

// var a = { name: { value: "5" }, hey: "hey", c: 6 };

// const name = a.name;
// const hey = a.hey;
// const c = a.c;

// const { name, hey, c } = a;

// var b = { ...a, hey: "heyP" };
// console.log(b);
// console.log(b.name === a.name);

// function foo(name, ...input) {
//   //console.log(arguments);
//   console.log(input);
// }

// foo("hello", "hey");
// function init() {
//   var a = {
//     foo: function() {
//       console.log(this);
//     }.bind(this),
//     foo2: () => {
//       console.log(this);
//     }
//   };

//   a.foo();
//   // a.foo2();
// }
// init();
