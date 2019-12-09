Array.prototype.myFilter = function(callback) {
  let result = [];
  this.forEach(element => {
    if (callback(element)) {
      result.push(element);
    }
  });
  return result;
};

let res = [1, 2, 3, 4, 5, 6].myFilter(element => {
  return element % 2 === 0;
});

console.log(res);
