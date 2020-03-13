// // let a = [1, 2, 3];
// // Array.prototype.myForEach = function (cbFunc) {
// //      for (let i = 0; i < this.length; i++) {
// //           cbFunc(this[i]);
// //      }
// // }


// // a.myForEach(item => console.log(item));
// let a = [1, 2, 3];
// Array.prototype.myMap = function (cbFunc) {
//      let myArr = []
//      for (let i = 0; i < this.length; i++) {
//           let data = cbFunc(this[i]);
//           myArr.push(data);
//      }
//      return myArr;
// }

// let res = a.myMap(item => item * 4);
// console.log(res);



// const obj = { "name": "Md", "age": 19 };

// obj.forEach = function (cb) {
//      for (let [key, value] of Object.entries(this)) {
//           if (key !== 'forEach') cb(key, value);
//      }

// }
// obj.forEach((key, value) => {
//      console.log(key, value)
// });


class AntraMath {
     constructor(num) {
          this.res = num;
     }
     add(number) {
          this.res = this.res + number;
          return this;
     }
     multiply(number) {
          this.res = this.res * number;
          return this;
     }
     done() {
          return this.res;
     }
}
let myMath = new AntraMath(10)
myMath.add(5).multiply(2);
let res = myMath.done();
console.log(res);