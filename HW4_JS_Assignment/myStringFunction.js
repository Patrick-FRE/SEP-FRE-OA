let arr = [1, 2, 3, 4, 5];
let strArr = ['Prime', 'Minister', 'addressed', 'ddeparted', 'ecelebrate'];
let str = 'abc';

// ===================================================
//  myForEach()
// ===================================================

// Array.prototype.myForEach = function(callBackFn) {
//   for (let i = 0; i < this.length; i++) {
//     callBackFn(this[i]);
//   }
// };
// arr.myForEach(element => {
//   console.log(element);
// });

// ===================================================
// myMap()
// ===================================================

// Array.prototype.myMap = function(callBackFn) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr[i] = callBackFn(this[i]);
//   }
//   return newArr;
// };
// let result = arr.myMap(element => {
//   return element + 2;
// });
// console.log(result);

// ===================================================
// myFilter()
// ===================================================

// Array.prototype.myFilter = function(callBackFn) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callBackFn(this[i])) {
//       res.push(this[i]);
//     }
//   }
//   return res;
// };

// let result = strArr.myFilter(element => {
//   return element.length > 5;
// });
// console.log(result);

// ===================================================
// myReduce()
// ===================================================

// Array.prototype.myReduce = function(callBackFn, init) {
//   let array = this;
//   let loader = init || array[0];
//   let index = init ? 0 : 1;
//   for (let i = index; i < this.length; i++) {
//     loader = callBackFn(loader, this[i]);
//   }
//   return loader;
// };
// function sum(total, num) {
//   return (total = total + num);
// }
// let result = arr.myReduce(sum, 0);
// console.log(result);

// ===================================================
// mySome()
// ===================================================

// ===================================================
// mySome()
// ===================================================
