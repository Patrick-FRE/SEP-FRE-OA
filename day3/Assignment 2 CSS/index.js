Array.prototype.myMap = function (cb) {
  let map = [];
  for(let i = 0; i < this.length; i++) {
    map.push(cb(this[i]));
  }
  return map;
}

let a = [1, 2, 3, 4];

let b = a.myMap(el => el * 2);

console.log(b);


Array.prototype.myFilter = function (cb) {
  let filter = [];
  for (let num of this) {
    if (cb(num)) {
      filter.push(num);
    }
  }
  return filter;
};

let c = a.myFilter(el => el % 2 === 0);

console.log(c);

// const obj = { name: "patrick", age: 18 };

// obj.forEach = function (cb) {
//   let key = Object.keys(this);
//   let val = Object.values(this);

// }

// obj.forEach((k, v) => console.log(k, v));

// class AntraMath {
//   constructor(num) {
//     this.sum = num;
//     this.add = function (n) {
//       this.sum += n;
//     }
//     this.multiple = function (n) {
//       this.sum *= n;
//     }
//     this.divide = function (n) {
//       this.sum /= n;
//     }
//     this.subtract = function (n) {
//       this.sum -= n;
//     }
//     this.done = function () {
//       return this.sum;
//     }
//   }
// }

class AntraMath {
  constructor(num) {
    this.sum = num;
  }
  add (n) {
    this.sum += n;
    return new AntraMath(this.sum);
  }
  multiple (n) {
    this.sum *= n;
    return new AntraMath(this.sum);
  }
  divide (n) {
    this.sum /= n;
    return new AntraMath(this.sum);
  }
  subtract (n) {
    this.sum -= n;
    return new AntraMath(this.sum);
  }
  done () {
    return this.sum;
  }
}

let myMath = new AntraMath(10);

// myMath.add(5);
// myMath.multiple(2);

let res = myMath.add(5).multiple(2).done();


console.log(res)


//bind(this) only works on arrow functions