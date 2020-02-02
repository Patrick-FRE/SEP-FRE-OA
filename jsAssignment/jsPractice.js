// let myMath = new AntraMath(10);
// myMath.add(5);
// myMath.multiple(2);
// myMath.add(5).multiple(2);
// let res = myMath.done();
// console.log(res);

// class AntraMath {
//   constructor(num) {
//     this.num = num;
//   }
//   add(num) {
//     this.num += num;
//     return this;
//   }
//   multiple(num) {
//     this.num *= num;
//     return this;
//   }
//   done() {
//     return this.num;
//   }
// }
// let myMath = new AntraMath(10);
// myMath.add(5);
// myMath.multiple(2);
// myMath.add(5).multiple(2);
// let res = myMath.done();
// console.log(res);

// ================ //

// let myMath2 = AntraAdd(2)(3)(4); // 9
// let myMath2 = AntraAdd(2, 3)(3)(4); // 12
// let myMath2 = AntraAdd(2)()(); //2

class AntraAdd {
  constructor(num) {
    this.name = name;
  }
}

let myMath2 = new AntraAdd(2);
console.log(myMath2);
