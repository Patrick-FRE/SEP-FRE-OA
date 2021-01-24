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

//var let const

// function foo() {
//   var a = 5;
//   if (true) {
//     const b = 6;
//   }
//   console.log(a);
//   console.log(b);
// }

// foo();

// console.log(a);

// const obj = {};
// obj.name = "patrick";
// obj = { name: "patrick" };
// console.log(obj);

// loop

// let array = [1, 2, 3, 4, 5];
// let array2 = ["a", "b", "c"];
// let str = "abc";

// let newArray = array.patrickMap(element => {
//   return "" + element + "patrick";
// });

// console.log(newArray);

// Object.prototype.forEachPatrick = function(callbackFn) {
//   for (let i = 0; i < this.length; i++) {
//     callbackFn(this[i]);
//   }
// };

// str.forEachPatrick(element => {
//   console.log(element);
// });

// array.forEach(element => {
//   console.log(element);
// });

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// let i = 0;
// while (i < array.length) {
//   console.log(array[i]);
//   i++;
// }

// array.map(element => {
//   console.log(element);
// });

// var str = "abc";

// str.forEach(_ => console.log(_));

// array.every();
// array.some();

// function foo() {
//   console.log(this);
// }

// bind call apply
// var a = {
//   foo: () => {
//     console.log(this);
//   },
//   foo2: function() {
//     console.log(this);
//   }.bind(this)
// };
// a.foo2();

// let a = { name: "patrick" };
// let b = { name: "patrick" };
// let c = "0";
// let c2 = "0";
// let d = 0;
// let e = a;

/// coercion
// console.log(c == d);
// /// string to number
// console.log(+c);
// /// number to string;
// console.log("" + d);

// console.log(c === d);
// console.log(a == b);
// console.log(c === c2);
// console.log(e == a);

// let a = { name: { test: ["a", "b"] } };

// shadow copy
// let b = a;
// b.name = "Jia";

// copy
// let b = { ...a, newP: "p", name: 5 };
// let array = [1, 35, 5];
// let array2 = ["b", "v"];
// let array3 = [...array, ...array2];
// console.log(array3);

// console.log(b.name === a.name);

// // deep copy;
// let jsonStr = JSON.stringify(a);
// let c = JSON.parse(jsonStr);
// console.log(c);

// let b = Object.create({});
// console.log(b);

// rest operator

// let aa = { name: "a" };
// let bb = { name: "b" };

// function foo(name, ...hello) {
//   console.log(name, hello);
//   hello[0] = "patrick";
// }

// foo("patrick", aa, bb);
// console.log(aa);

// destructor

// var obj = { name: "patrick", age: 18 };

// var test = obj.test.test,
// //   age = obj.age;

// var { test, age } = obj;
// // console.log(obj);
// console.log(age);

// let matrix = new Array(3).fill(0).map(data => {
//   console.log(data);
// });
// matrix[0][0] = 1;
// console.log(matrix);

// setTimeout(() => {
//   console.log(0);
// }, 0);

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);

// 0 1 3 2
// 1 3 0 2
// 1 0 3 2

// function foo() {
//   for (var i = 0; i < 10; i++) {
//     (function() {
//       var j = i;
//       setTimeout(() => {
//         console.log(j);
//       }, 1000);
//     })();
//   }
// }
// foo();
// 0 1 2 3 .... 9 every one sec
// 10 10 10 10 ...10 after ten sec
// Error not defiend
// 10 10 10 10 every one sec
// 0 ... 9 show once after one sec

// function message() {
//   console.log(1);
// }

// function foo(input) {
//   input();
// }

// foo(message);
// console.log(2);

// function myGetData(url, callbackFn) {
//   // implement
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       callbackFn(JSON.parse(this.responseText));
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }

// function getBigestId(postsArray) {
//   return 5;
// }

// myGetData("https://jsonplaceholder.typicode.com/posts", nextAjax);

// function nextAjax(data) {
//   let id = getBigestId(data);
//   myGetData(`https://jsonplaceholder.typicode.com/posts?id=${id}`, printData);
// }

// function printData(data) {
//   console.log(data);
// }

// function AntraMath(num) {
//   this._value = num;
// }

// AntraMath.prototype.add = function(numAdd) {
//   this._value += numAdd;
//   return this;
// };

// AntraMath.prototype.multiple = function(numM) {
//   this._value *= numM;
//   return this;
// };
// AntraMath.prototype.done = function() {
//   return this._value;
// };

// let myMath = new AntraMath(10);
// let b = new AntraMath(10);
// console.log(myMath === b);
// console.log(AntraMath.__proto__);
// console.log(myMath);
// myMath.add(5);
// console.log(myMath);
// myMath.multiple(2);
// console.log(myMath);
// myMath.add(5).multiple(2);
// console.log(myMath);
// let res = myMath.done();
// console.log(res);

// ================ //

// let myMath2 = AntraAdd(2)(3)(4); // 9
// console.log(myMath2);
// let myMath2 = AntraAdd(2, 3)(3)(4); // 12
// console.log(myMath2);
// // let myMath2 = AntraAdd(2)()(); //2

// let AntraAddClean = (...num1) => (...num2) => (...num3) =>
//   [...num1, ...num2, ...num3].reduce((acc, cur) => acc + cur, 0);

// function AntraAdd(...num1) {
//   const sum1 = num1.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   return function(...num2) {
//     const sum2 = num2.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);
//     return function(...num3) {
//       const sum3 = num3.reduce((acc, cur) => {
//         return acc + cur;
//       }, 0);
//       return sum1 + sum2 + sum3;
//     };
//   };
// }

// getPostsData(url).then(posts => console.log(posts));

// console.log("=============");
// let myFirstPromise = new Promise((resolve, reject) => {
//   // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//   // In this example, we use setTimeout(...) to simulate async code.
//   // In reality, you will probably be using something like XHR or an HTML5 API.
//   setTimeout(function() {
//     resolve("Success!"); // Yay! Everything went well!
//   }, 2500);
// });

// myFirstPromise
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(new Error(error));
//   });

// function fetchData(url, options = { method: "GET" }) {
//   console.log("fetchData");
//   return new Promise((res, rej) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         let result = { json: () => JSON.parse(this.responseText) };
//         res(result);
//       } else if (this.readyState == 4 && this.status != 200) {
//         console.log(this);
//         rej(this.response);
//       }
//     };
//     xhttp.open(options.method, url, true);
//     xhttp.send();
//   });
// }

// fetchData("https://jsonplacesdfsdfsdfholder.typicode.com/postsdddddd")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log("catch", error));
// output the posts data

// class AntraPromise {
//   constructor(callBackFn) {
//     this.state = "pending";
//     this.callBackThenList = [];
//     callBackFn(this.resolve.bind(this), this.reject.bind(this));
//   }

//   resolve(data) {
//     this.state = "resolve";
//     this.callBackThenList.forEach(cb => {
//       cb(data);
//     });
//   }
//   reject(data) {
//     this.state = "reject";
//     this.callBackFnCatch(data);
//   }

//   then(callBackFnThen) {
//     this.callBackThenList.push(callBackFnThen);
//     return this;
//   }
//   catch(callBackFnCatch) {
//     this.callBackFnCatch = callBackFnCatch;
//   }
// }

// const myPromise = new AntraPromise((res, rej) => {
//   setTimeout(() => {
//     res("Error");
//   }, 2000);
// })
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("error", error);
//   });


