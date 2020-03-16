//currying
// const myAdd = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     }
//   }
// }



// let res = myAdd(5)(6)(5);
// console.log(res);

//myAdd(5, 2, 2, 10)()(5, 8, 1)
// const myAdd = (...a) => (...b) => (...c) => {
//       return [...a, ...b, ...c].reduce((acc, curr) => {
//         return acc + curr;
//       }, 0);
// };

// console.log(myAdd(5, 2, 2, 10)()(5, 8, 1))


// function getData(cb) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.
// }

let p = new Promise(()=> (res, rej) => {
  res("first msg");
}).then(data => {
  console.log(data);
});