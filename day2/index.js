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

const obj = { name: "habib", age: 22 };

obj.forEach = function (cb) {
    // console.log(this.length)
    for (let key in obj) {
        // console.log("key: " + key)
        // console.log("value: " + this[key]);
        if (key === "forEach") continue;
        cb(key, this[key]);
    }
}

obj.forEach((key, value) => {
    console.log("key: " + key + " value: " + value);
})

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
let res = myMath.add(5).multiply(2).done();
console.log(res);

class State {
    constructor(name, age) {
        this._person = { name: name, age: age }
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