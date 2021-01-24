function arrayReduce(array, iteratee, initAccum) {
  var index = -1,
    length = array.length,
    accumulator = initAccum;

  while (++index < length) {
    accumulator = iteratee(accumulator, array[index]);
  }
  return accumulator;
}

let res = arrayReduce(
  [7, 2, 4],
  function(a, b) {
    return a + b;
  },
  0
);
console.log(res);

// What is the code below going to evluate to?
// it will return the sum of all items in the array, 13 is the result for this cae.

var input = [];
for (var i = 0; i < 10000; i++) {
  input.push(i % 2 == 0 ? [i] : [i, i]);
}

var result = arrayReduce(
  input,
  function(a, b) {
    return a.concat(b);
  },
  []
);

// is there something potentially bad about the code above?
// If the input.length is becoming higher(like 1000000), the while loop in the reducer will use a.concat(b) to create a million different array objects, and throwing away 999,999 of them. Creating that many Array Objects that are continually growing in size is not fast, and now the garbage collector has a lot of work to do to clean up after this.
