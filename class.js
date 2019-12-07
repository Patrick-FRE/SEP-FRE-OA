// import { element } from "prop-types";

// deconstructing
// Array.prototype.myMap = function(func) {
//   let newArr = [];
//   this.forEach((element, index, array) => {
//     newArr.push(func(element, index, array));
//   });
//   return newArr;
// };
// let res = [1, 2, 3].myMap(num => num * 2);
// console.log(res);

// let res = [1, 2, 3].myMap((num, index, array) => {
//   console.log(index);
//   console.log(array);
//   return num * 2;
// });
// console.log(res);

Array.prototype.myFilter = function(func) {
  let newArr = [];
  this.forEach(element => {
    if (func(element) === true) {
      console.log(func(element));

      newArr.push(element);
    }
  });
  return newArr;
};

let resp = [1, 2, 3].myFilter(function(num) {
  return num <= 2;
});
console.log(resp);
