/// closure
// to access private variable and cache data
/// IIFE 
//(function(){})();

// let counter = (function () {
//      count = 0;
//      return {
//           increment: function () {
//                counter++;
//           },
//           getCount: function () {
//                return count;
//           }
//      }
// })();
// counter.increment();
// console.log(counter.getCount());

let reducer = (a) => a.reduce((a, c) => a + c, 0);
let myAdd = (...a) => (...b) => (...c) => reducer(a) + reducer(b) + reducer(c)

let res = myAdd(5, 5, 3)()(5, 8, 1);
console.log(res);