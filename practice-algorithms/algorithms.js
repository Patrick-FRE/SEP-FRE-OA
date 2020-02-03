function inverse(input) {
  let index = input.length - 1;
  let output = "";
  while (index != -1) {
    output = output + input[index];
    index--;
  }
  return output;
}

function palindrome(input) {
  let index = 0;
  while (Math.floor(input.length / 2) >= index + 1) {
    if (input[index] != input[input.length - 1 - index]) return false;
    index++;
  }
  return true;
}


function combination(input) {
  let output = [];
  for (let i = 0; i < input.length - 1; i++) {
    output.push(input[i]);
  }
  twoCombination(input[0], input.substring(1));
  function twoCombination(str, rest) {
    let index = 0;
    let o = "";
    while (index <= rest.length - 1) {
      o = str + rest[index];
      output.push(o);
      twoCombination(o, rest.substring(index + 1));

      index++;
    }
  }
  return output;
}

function alphabet(input) {
  index = 0;
  let output = new Array(26);
  for (let i = 0; i < 25; i++) {
    output[i] = [];
  }
  input = input.toLowerCase();
  while (index <= input.length - 1) {
    output[input[index].charCodeAt(0) - 97].push(input[index]);
    index++;
  }
  output = output.flat(Infinity);
  return output;
}

function uppercase(input) {
  let output;
  output = input.split(" ");
  for (let i = 0; i <= output.length - 1; i++) {
    output[i] = output[i][0].toUpperCase() + output[i].substring(1);
  }
  output = output.join(" ");
  return output;
}

function longestWord(input) {
  let output = input.split(" ");
  let index = 0;
  let length = 0;
  for (let i = 0; i <= output.length - 1; i++) {
    if (output[i].length > length) index = i;
    length = output[i].length;
  }
  return output[index];
}

function vowels(input) {
  let output = 0;
  let map = { a: true, e: true, i: true, o: true, u: true };
  for (let i = 0; i <= input.length - 1; i++) {
    if (map[input[i]]) output++;
  }
  return output;
}

function prime(input) {
  let limit = Math.floor(Math.sqrt(input));
  if (input === 1) return false;
  if (input % 2 === 0) return false;
  if (input === 3) return false;
  for (let i = 3; i <= limit; i++) {
    if (input % i === 0) return false;
  }
  return true;
}

function checkType(input) {
  return typeof input;
}

function identityMatrix(n) {
  let output = new Array(n);
  for (let i = 0; i <= n - 1; i++) {
    temp = new Array(n);
    temp.fill(0);
    temp[i] = 1;
    output[i] = temp;
  }
  return output;
}

function secondary(input) {
  input = input.sort((a, b) => {
    a - b;
  });
  return [input[1], input[input.length - 2]];
}

function perfectNumber(input) {
  let i = 1;
  while (input > 0) {
    input = input - i;
    i++;
  }
  if (input < 0) return false;
  return true;
}

function getFactor(input) {
  let limit = Math.floor(Math.sqrt(input));
  let output = [1, input];
  for (let i = 2; i <= limit; i++) {
    if (input % i == 0) {
      output.push(i);
      if (i != Math.round(input / i)) output.push(Math.round(input / i));
    }
  }
  return output;
}

function coins(input) {
  let output = [];
  if (input / 25 > 1) {
    let iteration = Math.round(Math.floor(input / 25));
    console.log(Math.round(Math.floor(input / 25)));
    for (let i = 1; i <= iteration; i++) {
      input = input - 25;
      output.push(25);
    }
  }

  if (input / 10 > 1) {
    let iteration = Math.round(Math.floor(input / 10));
    for (let i = 1; i <= iteration; i++) {
      input = input - 10;
      output.push(10);
    }
  }
  if (input / 5 > 1) {
    let iteration = Math.round(Math.floor(input / 5));
    for (let i = 1; i <= iteration; i++) {
      input = input - 5;
      output.push(5);
    }
  }

  if (input / 2 > 1) {
    let iteration = Math.round(Math.floor(input / 2));
    for (let i = 1; i <= iteration; i++) {
      input = input - 2;
      output.push(2);
    }
  }

  if (input / 1 > 1) {
    let iteration = Math.round(Math.floor(input / 1));
    for (let i = 1; i <= iteration; i++) {
      input = input - 1;
      output.push(1);
    }
  }
  return output;
}

function exponent(b, n) {
  return Math.pow(b, n);
}

function uniqueStr(input) {
  let map = {};
  let output = "";
  for (let i = 0; i <= input.length - 1; i++) {
    if (map[input[i]] != true) {
      map[input[i]] = true;
      output = output + input[i];
    }
  }
  return output;
}

function occurance(input) {
  let map = {};
  for (let i = 0; i <= input.length - 1; i++) {
    if (map[input[i]] == undefined) map[input[i]] = 0;
    map[input[i]] = map[input[i]] + 1;
  }
  return map;
}

function binarySearch(input, key) {
  let arr = input;
  let index;
  while (arr.length > 1) {
    index = Math.round(Math.floor(arr.length - 1 / 2));
    if (key > arr[index]) {
      arr = arr.slice(index + 1, arr.length - 1);
    } else if (key < arr[index]) {
      arr = arr.slice(0, index);
    } else {
      return index;
    }
  }
}

function largerInArray(input, key) {
  let output = [];
  for (let i = 0; i <= input.length - 1; i++) {
    if (input[i] > key) {
      output.push(input[i]);
    }
  }
  return output;
}

function subset(input, dim) {
  let output = [];
  let index = 0;
  let map = {};
  for (let i = 0; i <= input.length - 1; i++) {
    if (map[input[i]] != true) {
      map[input[i]] = true;
    } else {
      input.splice(i, 1);
    }
  }
  function recur(a, b) {
    if (a.length > dim - 1) {
      output.push(a);
      index++;
      if (b.length == 0) return;
      recur([input[index]], [...input.slice(index + 1)]);
    } else {
      for (let i = 0; i <= b.length - 1; i++) {
        let aa = [...a];
        aa.push(b[i]);

        recur(aa, [...b.slice(i + 1)]);
      }
    }
  }

  recur([input[0]], [...input.slice(1)]);

  return output;
}

function randomString(length) {
  let output = "";
  for (let i = 0; i <= length - 1; i++) {
    let asicii = Math.floor(Math.random() * 62);
    if (asicii >= 0 && asicii <= 9) {
      output = output + String.fromCharCode(asicii + 48);
    } else if (asicii >= 10 && asicii <= 35) {
      output = output + String.fromCharCode(asicii + 55);
    } else output = output + String.fromCharCode(asicii + 61);
  }
  return output;
}

function charOccurance(input, key) {
  let output = 0;
  for (let i = 0; i <= input.length - 1; i++) {
    if (input[i] === key) output++;
  }
  return output;
}

function nonRepeated(input) {
  for (let i = 0; i <= input.length - 1; i++) {
    let rem = input.substring(0, i) + input.substring(i + 1);

    if (rem.indexOf(input[i]) == -1) return input[i];
  }
  return "no result";
}


function bubble_Sort(input) {
  let swap;
  let n = input.length - 1;
  let x = input;
  do {
    swap = false;
    for (let i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        let temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swap = true;
      }
    }
    n--;
  } while (swap);
  return x;
}

function longestPalindrome(input) {
  let length = 0;
  let output = [];
  let index1;
  let index2;
  function recur(a, b) {
    if (index2 - index1 < length - 1) return;

    if (input[a] === input[b]) {
      if (b - a <= 2) {
        length = index2 - index1 + 1;
        output = input.slice(index1, index2 + 1);
      } else {
        recur(a + 1, b - 1);
      }
    } else return;
  }
  for (let i = 0; i <= input.length - 1; i++) {
    for (let j = i + 1; j <= input.length - 1; j++) {
      index1 = i;
      index2 = j;
      recur(i, j);
    }
  }
  return output;
}

function longestNonrepeat(input) {
  let length = 0;
  for (let i = 0; i <= input.length - 1; i++) {
    for (let j = i; j <= input.length - 1; j++) {
      if (input.substring(i, j).indexOf(input[j]) === 1) {
        if (j - i > length) {
          length = j - i;
          break;
        }
      }
    }
  }
  return length;
}

console.log(longestNonrepeat("abbaaabaziopdaaadffg"));

/* function AntraAdd() {
  this.value = 0;
  this.adder = () => {
    this.value++;
    return this.adder, this.value;
  };
  this.later = () => {
    return setTimeout(() => {
      return this.value;
    }, 0);
  };
}
var numm = new AntraAdd();

num = numm.adder;
console.log(num());
let num1 = num()();
setTimeout(() => {
  console.log(num1);
}, 1);
 */

/* console.log(Number.prototype); */
//subset([1, 4, 6, 7, 9, 11, 13],4);

/* console.log(subset([1, 4, 6,7,7],2));

var array = [1, 2, 3, 4, 5]; */
/* array.forEachJoe = function(cb){
  console.log(this.length);
  for (let value of this.values()) {
    cb(value);
  }
} */

/* Array.prototype.forEachJoe1 = function (cb) {
  let output = [];
  for (let value of this.values()) {
    output.push(cb(value));
  }
  return output;
}


function myGetData(url, cb) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(this.responseText);
    }
  };
  xhttp.open("GET", url, true);//"https://jsonplaceholder.typicode.com/posts"
  xhttp.send();
}

//myGetData("https://jsonplaceholder.typicode.com/posts",(d)=>{console.log(d)});

function getData(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var id = JSON.parse(this.responseText).sort((a, b) => (a.id > b.id) ? 1 : -1)[0].id;

      url = `https://jsonplaceholder.typicode.com/posts?id=${id}`;
      myGetData(url, (d) => { console.log(d) });

    }
  };
  xhttp.open("GET", url, true);//"https://jsonplaceholder.typicode.com/posts"
  xhttp.send();
}

getData("https://jsonplaceholder.typicode.com/posts");

console.log(array.forEachJoe1((e) => { return '' + e + 'joe' }));
console.log(this);
 */

/* a=[[1,2,3],[4,5,6],[7,8,9]];
a[1][1]=0;
console.log(a);

console.log(occurance('saldfbsdkufvewrkfvw'));
 */
