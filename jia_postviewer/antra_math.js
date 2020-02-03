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

/* In-class version
function AntraMath(num) {
    this._value = num; //this related to left side of the dot
}

AntraMath.prototype.add = function(numAdd) {
    this._value += numAdd;
    return this;
}

AntraMath.prototype.mutliple = function(numMult) {
    this._value *= numMutl;
    return this;
}

// VERSUS
// instance = object of one class; new keyword returns instance of class
// this.add is created the same number of times instance is created
// for every instance need to re-declare this.add, not really reused
// to reuse, declare using prototype (class "method"), same as declaring function inside class keyword
// in those two cases, methods inherited by default

function AntraMath(num) {
    this._value = num;

    this.add = function(numAdd) {
        this._value += numAdd;
    }
}

*/

let myMath = new AntraMath(10); //after new, class or function
myMath.add(5); //function in javascript, method in others
myMath.multiple(2); //class method not instance method
myMath.add(5).multiple(2); //chaining, (myMath.add(5)) needs to be an instance of AntraMath as well
let res = myMath.done();
console.log(res);


let b = new AntraMath(10);
console.log(myMath === b); //false
console.log(myMath.__proto__ === b.__proto__); //true
console.log(myMath.__proto__ === AntraMath.prototype);
//__proto__ is helper to return the prototype, use with instance
// __proto__ is something for the prototype of the 
// not good way to declare class method, use prototype instead
// use prototype with class/prototype


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
                s += n; //better to use reduce
            });
        } else if (num != undefined) {
            s += num;
        }
    });
    return s;
}

let AntraAdd = curry(sum);


/* In-class

let myMath2 = AntraAdd(2,3)(3)(4);

function AntraAdd(num1) {
    console.log(arguments); ///[Arguments] {'0': 2, '1': 3}
    return function(num2) {
        console.log(arguments);
        return function(num3) {
            console.log(arguments);
            return num1 + num2 + num3; //closure: can use inner function to access outer function variables
        }   
    }
}

function AntraAdd(...num1) {
    console.log(num1); ///[2, 3]
    
    // const sum1 = num1.reduce((acc, cur, index, array)=>{
    //     console.log("reduce", acc, cur, index, array);
    //     return acc + cur;
    // }, 0); /// reduce: callbackfn, initial value for the accumulator
    
    const sum1 = num1.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    return function(...num2) {
        console.log(num2);
        const sum2 = num1.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
        return function(...num3) {
            console.log(num3);
            const sum3 = num1.reduce((acc, cur) => {
                return acc + cur;
            }, 0);
            // return num1 + num2 + num3; //closure: can use inner function to access outer function variables
            return sum1 + sum2 + sum3;
        }
    }
}

// clean version
let AntraAddClean = (...num1) => (...num2) => (...num3) => 
    [...num1, ...num2, ...num3].reduce((acc, cur) => acc + cur, 0);




// [1,2,3] => {one:1, two:2, three:3} //can't use map to do this because map can only return array
//          => [2]; //filter
// calculate sum use reduce

*/

// let myMath2 = AntraAdd(2)(3)(4); //9

// let myMath2 = AntraAdd(2,3)(3)(4); //12
let myMath2 = AntraAdd(2)()(); //2
console.log(myMath2);