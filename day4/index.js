// ----------------------------------------------------
// Reversing a number
let reverseNumber = function(n) {
  let str = n.toString();
  let length = str.length - 1;
  // for (let i = 0; i < Math.floor(str.length/2); i++) {
  //     let front = str.charAt(i);
  //     let back = str.charAt(length);
  //     console.log("front: " + front + " " + back);
  //     console.log("string " + str.substring(i,i+1));
  //     str.replace(front, back);
  //     // console.log(str);
  //     str.replace(back, front);
  // }
  let ret = "";
  for (let i = length; i >= 0; i--) {
    ret += str.charAt(i);
  }
  return parseInt(ret);
};

let x = 32243;
console.log(reverseNumber(x) + "\n");

// ----------------------------------------------------
// Checking if a string is a palindrome
let checkPalindrome = str => {
  if (str == null || str.length == 0) return true;
  let length = str.length - 1;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(length--)) return false;
  }
  return true;
};

let palTest1;
let palTest2 = "";
let palTest3 = "abccba";
let palTest4 = "abccbd";
let palTest5 = "abcdcaa";

console.log(checkPalindrome(palTest1));
console.log(checkPalindrome(palTest2));
console.log(checkPalindrome(palTest3));
console.log(checkPalindrome(palTest4));
console.log(checkPalindrome(palTest5) + "\n");

// ----------------------------------------------------
// permutations of a string
let permutations = str => {
  let arr = [];
  let index = 0;
  let len = str.length;
  if (str == null || str.length == 0) return arr;
  if (str.length == 1) return Array.from(str);
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      arr[index++] = str.substring(i, j);
    }
  }
  return arr;
};

let perms = permutations("dog");
console.log(perms);

// ----------------------------------------------------
// sort a string alphabetically
let sortString = str => {
  let arr = Array.from(str);
  // for (let i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i].charCodeAt(0);
  // }
  arr.sort();
  return arr;
};

console.log(sortString("webmaster"));

// ----------------------------------------------------
// Convert first letter of each word to upper case
let convertToUpper = str => {
  let arr = Array.from(str.toLowerCase());
  arr[0] = arr[0].toUpperCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") arr[i + 1] = arr[i + 1].toUpperCase();
    // else if (arr[i] === " ") arr[i + 1] = arr[i+1].toUpperCase();
    // else if (arr[i + 1] === " ") {
    //     arr[i + 1].toUpperCase();
    //     i++;
    // }
  }
  return arr.join("");
};

console.log(convertToUpper("the quick brown fox"));

// ----------------------------------------------------
// Return the longest string within a string
let returnLongest = str => {
  // let arr = Array.from(str);
  let arr = str.split(" ");
  console.log(arr);
  return arr.reduce((str1, str2) => {
    return str1.length > str2.length ? str1 : str2;
  });
};

console.log(returnLongest("Web Development Tutorial"));

// ----------------------------------------------------
// Count the vowels in the string
let countVowels = str => {
  let vowels = ["a", "e", "i", "o", "u"];
  let ret = str.split("").reduce((counter, c) => {
    //   console.log("c: " + c);
    if (vowels.includes(c)) counter = counter + 1;
    // console.log("counter: " +counter);
    return counter;
  }, 0);
  return ret;
};

console.log(countVowels("The quick brown fox") + "\n");

// ----------------------------------------------------
// Check if a number is a prime number or not
let isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log("*/---------------------------------------/*");
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(29));
console.log(isPrime(35));
console.log(isPrime(39));
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// Type of argument
let findType = arg => {
  return typeof arg;
};

console.log(findType(10));
console.log(findType("string"));
console.log(findType(10.777));
console.log(findType(null));
let a;
console.log(findType(a));
console.log(findType({}));
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// identity matrix
let createIDMatrix = (m, n) => {
  let matrix = [];
  for (let i = 0; i < m; i++) {
    let column = [];
    for (let j = 0; j < n; j++) {
      if (i === j) column.push(1);
      else column.push(0);
    }
    matrix.push(column);
  }
  return matrix;
};

console.log(createIDMatrix(3, 3));
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// Find the second greatest and lowest numbers in an array
let second_Low_Great = arr => {
  let max = Number.MIN_VALUE;
  let secondMax = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  let secondMin = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secondMax = max;
      max = arr[i];
    } else if (max > arr[i] && secondMax < arr[i]) {
      secondMax = arr[i];
    }

    if (min > arr[i]) {
      secondMin = min;
      min = arr[i];
    } else if (min < arr[i] && secondMin > arr[i]) {
      secondMin = arr[i];
    }
  }
  console.log("Second Min: " + secondMin + "\nSecond Max: " + secondMax);
};

second_Low_Great([1, 2, 3, 4, 5]);
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// Find whether a number is perfect
let isPerfect = num => {
  // let divisors = [];
  if (num < 6) return false;
  let sum = 1;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  if (sum === num) return true;
  return false;
};

console.log(isPerfect(3));
console.log(isPerfect(6));
console.log(isPerfect(5));
console.log(isPerfect(27));
console.log(isPerfect(28));
console.log(isPerfect(30));
console.log(isPerfect(426));
console.log(isPerfect(496));
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// Find factors of positive integers
let factors = num => {
  let factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i === i) factors.push(i);
      else {
        factors.push(i);
        factors.push(num / i);
      }
    }
  }
  return factors;
};

console.log(factors(100));
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// Convert an amount to coins
let amountToCoins = (num, coins) => {
  let ret = [];
  let numCpy = num;
  let index = 0,
    loop = 0;
  console.log("starting conversions of number to coins");
  while (numCpy > 0) {
    // console.log(ret);
    if (numCpy >= coins[index]) {
      // console.log(ret + "\n");
      ret.push(coins[index]);
      numCpy -= coins[index];
    }
    if (numCpy < coins[index]) {
      // console.log("smaller");
      index++;
    }

    // loop++;
    // if (loop > 10) break;
  }
  return ret;
};

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// Compute value of bn where n is the exponent and b is the base
let exp = (b, n) => {
  // return Math.pow(b, n);
  let ret = 1;
  for (let i = 1; i <= n; i++) {
    ret *= b;
  }
  return ret;
};
console.log(exp(2, 3));
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// Extract unique characters from a string
let uniqueCharacters = str => {
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    if (!chars.includes(str.charAt(i))) {
      chars.push(str.charAt(i));
    }
  }
  return chars.join("");
};

console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));
console.log("*/---------------------------------------/*");

// ----------------------------------------------------
// Get number of occurrences of each letter in a string
let occurrences = str => {
  let occurrences = {};
  for (let i = 0; i < str.length; i++) {
    let current = str.charAt(i);
    if (occurrences.hasOwnProperty(current)) occurrences[current] += 1;
    else occurrences[current] = 1;
  }
  return occurrences;
};

console.log(occurrences("thequickbrownfoxjumpsoverthelazydog"));
console.log("*/---------------------------------------/*\n");

// ----------------------------------------------------
// binary Search
let binarySearch = (n, arr) => {
  let ret;
  let loopLimit = arr.length + 1;
  let index,
    smallIndex = 0,
    bigIndex = arr.length - 1;
  let found = false;

  while (smallIndex <= bigIndex) {
    index = Math.floor((smallIndex + bigIndex) / 2);
    // console.log("index: " + index + " smallIndex: "+ smallIndex + " bigIndex: " + bigIndex);

    if (n === arr[index]) return index;
    else if (n < arr[index]) {
      bigIndex = index - 1;
    } else if (n > arr[index]) {
      smallIndex = index + 1;
    }
    if (--loopLimit < 0) {
      console.log("PROGRAM HALTED");
      break;
    }
  }
  return -1;
};

let binArr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];
console.log("Found at index: " + binarySearch(6, binArr));
const remIdx = binArr.indexOf(6);
if (remIdx > -1) binArr.splice(remIdx, 1);
console.log("Found at index: " + binarySearch(6, binArr));
console.log("Found at index: " + binarySearch(-5, binArr));
console.log("Found at index: " + binarySearch(21, binArr));
console.log("Found at index: " + binarySearch(20, binArr));
console.log("*/---------------------------------------/*\n");

// ----------------------------------------------------
// Return all elements larger than a given number n
let larger = (n, arr) => {
  let ret = [];
  for (let num of arr) if (num > n) ret.push(num);
  return ret;
};

let numsArr = [];

for (let i = 0; i < 25; i++) numsArr.push(Math.random() * 100);
console.log(larger(20, binArr));
console.log(larger(15, binArr));
console.log(larger(50, numsArr));
console.log("*/---------------------------------------/*\n");

// ----------------------------------------------------
// 