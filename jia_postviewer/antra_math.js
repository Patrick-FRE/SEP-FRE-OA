// ----------class functions-----------//
class AntraMath {
    constructor(num) {
        this.num = num;
    }
    add(n) {
        this.num += n;
        return this;
    }
    multiple(n) {
        this.num *= n;
        return this;
    }
    done() {
        return this.num;
    }
}

let myMath = new AntraMath(10); //after new, class or function
myMath.add(5); //function in javascript, method in others
myMath.multiple(2); //class method not instance method
myMath.add(5).multiple(2); //chaining
let res = myMath.done();
console.log(res);





// ----------currying----------- //

function curry(f) {
    return function(...a) {
        return function(...b) {
            return function(...c) {
                return f(a, b, c);
            };
        };
    };
}

function sum(...rest) {
    let s = 0;
    rest.forEach(num => {
        if (Array.isArray(num)) {
            num.forEach(n => {
                s += n;
            });
        } else if (num != undefined) {
            s += num;
        }
    });
    return s;
}

let AntraAdd = curry(sum);


// let myMath2 = AntraAdd(2)(3)(4); //9

// let myMath2 = AntraAdd(2,3)(3)(4); //12
let myMath2 = AntraAdd(2)()(); //2
console.log(myMath2);