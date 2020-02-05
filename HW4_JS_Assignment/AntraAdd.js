// ======================================================
// let myMath2 = AntraAdd(2)(3)(4); // 9
// let myMath2 = AntraAdd(2, 3)(3)(4); // 12
// let myMath2 = AntraAdd(2)()(); //2
let AtraAddClean = (...a) => (...b) => (...b) =>
  [...a, ...b, ...c].reduce((acc, cur => acc + cur), 0);
let test1 = AtraAddClean(2)(3)(4);
let test2 = AtraAddClean(2, 3)(3)(4);
let test3 = AtraAddClean(2)()();
console.log(test1);
console.log(test2);
console.log(test3);

// ======================================================
function antraAdd2(...num1) {
  console.log(arguments);
  const sum1 = num1.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return function(...num2) {
    console.log(arguments);
    const sum2 = num2.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return function(...num3) {
      console.log(arguments);
      const sum3 = num3.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      return sum1 + sum2 + sum3;
    };
  };
}
let test1 = antraAdd2(2)(3)(4);
let test2 = antraAdd2(2, 3)(3)(4);
let test3 = antraAdd2(2)()();
console.log(test1);
console.log(test2);
console.log(test3);

// ======================================================
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
