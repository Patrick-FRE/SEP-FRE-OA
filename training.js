// let a = {
//   name: "patrick"
// };
// a = { name: "hey" };
// function foo(input) {
//   input = { name: "hey" };
//   console.log(input);
// }

// //foo(a);
// console.log(a);

// function foo() {
//   console.log(a);
//   function a() {
//     return 5;
//   }
// }
// foo();
// console.log(a);
// const a = {
//   name: "pat"
// };
// a.name = "hey";
// console.log(a);

// function foo() {
//   return 5;
// }
// const arrowFoo = () => 5;
// let a = { name='pat' }

class Person {
  constructor(name, gendor) {
    this.name = name;
    this.gendor = gendor;
    this.say = function() {
      console.log("yooo");
      console.log(this.name, this.gendor);
    };
  }
  say() {
    console.log(this.name, this.gendor);
  }
}
// function Person(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   //   this.say = function() {
//   //     console.log(this.name, this.gender);
//   //   };
// }
// Person.prototype.say = function() {
//   console.log(this.name, this.gender);
// };
// let a = new Person("yo", "sup");
// function Person(name, gendor) {
//   this.name = name;
//   this.gendor = gendor;
// }
// let p = new Person("Pat", "male");
// console.log(p);
// p.say();
// function foo(name) {
//   console.log(name);
// }
// function foo(name, gender) {
//   console.log(name, gender);
// }
// foo("pat");
// class AntraMath {
//   constructor(num) {
//     this.num = num;
//   }
//   add(number) {
//     this.num += number;
//     return this;
//   }
//   multiple(number) {
//     this.num *= number;
//     return this;
//   }

//   done() {
//     return this.num;
//   }
// }

// function AntraMath(num) {
//   this.num = num;
// }

// function AntraMath() {
//   this.num = num;
// }
// AntraMath.prototype.add = num => {
//   return new AntraMath(this.num + num);
// };
// AntraMath.prototype.multiple = num => {
//   return new AntraMath(this.num * num);
// };
// AntraMath.prototype.done = () => {
//   return this.num;
// };

// let myMath = new AntraMath(10);
// // myMath.add(5);
// // myMath.multiple(2);
// let myAdd = myMath.add;
// myAdd(5).multiple(2);
// console.log(myMath.done());

// var a = {
//   name: "pat",
//   foo: function foo() {
// console.log(this);
//   }
// };
// let b = a.foo;
// b();
//

// var a = { name: { value: "pat" } };
// var b = { name: "pat" };
// var c = { ...a };
// console.log(c);
// console.log(c.name === a.name);

//currying
// function foo() {
//     var a = 5;
//     return function () {
//         console.log(a)
//     }
// }

// foo()()

// function Counter() {
//   this.num = 0;
//   this.add = function() {
//     this.num++;
//   };
//   this.getNum = function() {
//     return this.num;
//   };
// }
// var counter = new Counter();

// closure
// function Counter() {
//   var counter = 0;
//   return {
//     addOne: function() {
//       counter++;
//     },
//     subOne: function() {
//       counter--;
//     },
//     getCounter: function() {
//       return counter;
//     }
//   };
// }
// var counter = new Counter();
// counter.addOne();
// console.log(counter.getCounter());
// console.log(counter);

// function Myadd() {
//   let num = 0;
//   return {
//     add: function(int) {
//       num += int;
//     }
//   };
// }

// function myAdd(num1) {
//   return function(num2) {
//     return function(num3) {
//       return num1 + num2 + num3;
//     };
//   };
// }
// function myNewAdd(...a) {
//   return function(...b) {
//     return function(...c) {
//       console.log(
//         [...a, ...b, ...c].reduce((acc, cur) => {
//           return (acc += cur);
//         }, 0)
//       );
//     };
//   };
// }
// console.log(myAdd(5)(6)(5)); //output:16
// myNewAdd(5, 5)(6, 7)(5, 5); // 33

Array.prototype.myReduce = function(cb, init) {
  let result = init;
  this.forEach(item => {
    result = cb(result, item);
  });
  return result;
};
let res = [1, 2, 3].myReduce((acc, cur) => {
  return (acc += cur);
}, 0);
console.log(res);
