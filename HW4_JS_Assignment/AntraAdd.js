// let myMath2 = AntraAdd(2)(3)(4); // 9
// let myMath2 = AntraAdd(2, 3)(3)(4); // 12
// let myMath2 = AntraAdd(2)()(); //2

function antraAdd(...a) {
  return (...b) => {
    return (...c) => {
      return a.concat(b, c).reduce((i, j) => i + j, 0);
    };
  };
}
let test1 = antraAdd(2)(3)(4);
let test2 = antraAdd(2, 3)(3)(4);
let test3 = antraAdd(2)()();
console.log(test1);
console.log(test2);
console.log(test3);
