// =============== ES5 to create class ===============
// function AntraMath(num) {
//   this._value = num; //the use of underscore is to spectify the value to be private variable
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

// =============== ES6 to create class ===============
class AntraMath {
  constructor(num) {
    this.num = num;
  }
  add(num) {
    this.num += num;
    return this;
  }
  multiple(num) {
    this.num *= num;
    return this;
  }
  done() {
    return this.num;
  }
}
let myMath = new AntraMath(10);
myMath.add(5);
myMath.multiple(2);
myMath.add(5).multiple(2);
let res = myMath.done();
console.log(res);

// Different way to access the prototype
// let a = new AntraMath(10);
// let b = new AntraMath(10);
// console.log(a.__proto__ === AntraMath.prototype);
// console.log(a.__proto__ === b.__proto__);
