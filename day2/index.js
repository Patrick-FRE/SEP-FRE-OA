// let a = [1, 2, 3, 4, 5];
// Array.prototype.myForEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i])
//     }
// }

// a.myForEach(item => {
//     console.log(item);
// })

// Array.prototype.myMap = function (cb) {
//     let ret = [];
//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i])
//         ret[i] = cb(this[i])
//     }
//     return ret;
// }

// let res = a.myMap(item => item * 2);
// console.log(res);
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const obj = { name: "habib", age: 22 };

obj.forEach = function(cb) {
  // console.log(this.length)
  for (let key in obj) {
    // console.log("key: " + key)
    // console.log("value: " + this[key]);
    if (key === "forEach") continue;
    cb(key, this[key]);
  }
};

obj.forEach((key, value) => {
  console.log("key: " + key + " value: " + value);
});

class AntraMath {
  constructor(num) {
    this.num = num;
  }

  add(n) {
    this.num += n;
    return new AntraMath(this.num);
  }

  multiply(n) {
    this.num *= n;
    return new AntraMath(this.num);
  }

  done() {
    return this.num;
  }
}

let myMath = new AntraMath(10);
let res = myMath
  .add(5)
  .multiply(2)
  .done();
console.log(res);

class State {
  constructor(name, age) {
    this._person = { name: name, age: age };
  }

  //Object.defineProperty in es5
  get person() {
    console.log("get");
    return this._person;
  }

  set person(newPerson) {
    console.log("set");
    this._person = newPerson;
  }
}

let state = new State("habib", 22);
console.log(state.person);

let myAdd = (...n) => {
  // console.log("1: " + n);
  return (...a) => {
    // console.log("2: " + a);
    return (...b) => {
      // console.log(a+ " , "+ b + " , " + n.reduce((a,b)=> {return a+b; }))
      // console.log("3: " + b)
      return (
        n.reduce((a, b) => {
          return a + b;
        }, 0) +
        a.reduce((a, b) => {
          console.log(a);
          return a + b;
        }, 0) +
        b.reduce((a, b) => {
          return a + b;
        }, 0)
      );
    };
  };
};
let newArr = [1, 2, 3];
console.log("/**************************************");
newArr.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 0);
// const myAdd = (...num) => (...num2) => (...num3) =>
//   [...num, ...num2, ...num3].reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);

res = myAdd(5, 5, 3)()(5, 8, 1);
// console.log(res);

function myFetch(url) {
    return new Promise((res, rej) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                res(xhttp.responseText);
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    })
    // var xhttp = new XMLHttpRequest();
    // return function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         cb(xhttp.responseText);
    //     }
    //     xhttp.open("GET", url, true);
    //     xhttp.send();
    //     return xhttp;
    // }
}

myFetch("https://jsonplaceholder.typicode.com/todos/1")
.then(res => res.json())
.then(data => {
  console.log(data);
});
