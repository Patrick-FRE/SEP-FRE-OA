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

var a = [];
console.log(typeof a);
