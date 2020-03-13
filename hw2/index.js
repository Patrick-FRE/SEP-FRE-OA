// Array.prototype.myForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }

// let a = [1, 2, 3];

// // a.myForEach(el => {
// //     console.log(el)
// //     console.log('this',this)
// // })

// Array.prototype.myMap = function(callback) {
//     let outputArr = [];
//     for (let i = 0; i < this.length; i++) {
//         outputArr.push(callback(this[i],i,this))
//     }
//     return outputArr;
// }

// //console.log(a.map(el => el * 2));

// Array.prototype.myFilter = (callback) => {
//     let filteredArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             filteredArr.push(this[i])
//         }
//     }
//     return filteredArr
// }

// //console.log(a.filter(el => el >1))





// //Solving rest of problems with reduce

// function total(arr) {
//     return arr.reduce((acc,curr,index) => {
//         console.log(index)
//         console.log('acc', acc)
//         console.log('curr', curr)
//         console.log('acc + curr', acc + curr)
//         return acc + curr
//     })
// }


// //console.log(total(a))

// function stringConcat(arr) {
//     return arr.reduce((acc, curr) => {
//         return acc + curr
//     }, '')
// }
// //console.log(stringConcat(a))


// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function totalVotes(arr) {
//     return arr.reduce((acc, curr) => {
//         if (curr.voted === true) curr = 1;
//         else {
//             curr = 0;
//         }
//         return acc + curr
//     },0)
// }

// //console.log(totalVotes(voters))

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];


// function shoppingSpree(arr) {
//       return arr.reduce((acc, curr) => {
//         return acc + curr.price
//       },0)
//  }

//  //console.log(shoppingSpree(wishlist))

//  //Call, Apply, Bind
// class AntraMath {
//     constructor(val){
//         this.val = val;
//     }

//     add(num) {
//         this.val += num;
//         return this
//     }

//     multiply(num) {
//         this.val *= num;
//         return this;
//     }

//     done() {
//         return this.val
//     }
// }
//  let myMath = new AntraMath(10);
//  myMath.add(5).multiply(2);
//  let res = myMath.done();
//  console.log(res);

// class State {
//     constructor(name, age) {
//         this._person = {name: name, age: age}
//     }
//     get person() {
//         console.log('get');
//         return this._person;
//     }
//     set person(newPerson) {
//         console.log('set');
//         this._person = newPerson;
//     }
// }

// let state = new State('dean', 25);
// state.person = { name: 'changed', }

// let obj = {

// }

// function counter () {
//     let count = 0;
//     function inner(val) {
//         count += val;
//         return count;
//     }
//     return inner;
// }

// let add = counter();
// // console.log(add(5))
// // console.log(add(6));
// // console.log(add(5));

// // let res = myAdd(5,5,3)()(5,8,1);
// // console.log(res);

// function myAdd(...num) {
//     let sum = num.reduce((acc, curr) => {
//         return acc + curr;
//     },0);
//     return function(...num2) {
//         let sum2 = num2.reduce((acc, curr) => {
//             return acc + curr;
//         },0);
//         return function(...num3) {
//             let sum3 = num3.reduce((acc, curr) => {
//                 return acc + curr;
//             },0);
//             return sum + sum2+sum3
//         }
//     }
// }

// let summer = myAdd(5,5,3)()(5,8,1)
// console.log(summer);

// let world = 'world';
// let a = 'hello \n' + world;
// console.log(a)

// let b = `hello 
// ${world}`;
// console.log(b)

// let myArr = [1,2,3]
// console.log(1)
// myNewArr = myArr.map(el => el +2)
// console.log(myNewArr)
// console.log(2)
// console.log(myNewArr)
// console.log(3)

const myFetch = (url) => {
    return new Promise((res,rej) => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               res( { json: () => { return JSON.parse(xhttp.responseText)} }
                   /*(xhttp.responseText)*/);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    });
}


myFetch('https://jsonplaceholder.typicode.com/todos/').then(response => {return response.json()}).then(data => console.log(data))