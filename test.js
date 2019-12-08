let a = { name: "pat" };
console.log(Array.isArray(a));
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

// add(4)(3);
console.log(add(4)(3));
