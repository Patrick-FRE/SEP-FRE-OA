// 1.reverse a number.
const ReverseNum = function(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .join("");
};

// 2.Write a JavaScript function that checks whether a passed string is palindrome or not?

const CheckPalindrome = function(str) {
  const strArr = str.split("");
  let head = 0;
  let tail = strArr.length - 1;
  while (head < tail) {
    if (strArr[head] === strArr[tail]) {
      head++;
      tail--;
    } else {
      return false;
    }
  }
  return true;
};

// 3.Write a JavaScript function that generates all combinations of a string.
const StrCombination = function(comboOptions, n) {
  if (n === 1) {
    return comboOptions.map(el => [el]);
  }
  const combos = [];
  comboOptions.forEach((el, index) => {
    const smallCombos = StrCombination(comboOptions.slice(index), n - 1);

    smallCombos.forEach(smallCombo => {
      combos.push(el + smallCombo);
    });
  });
  return combos;
};

const StrCombinationParent = function(str) {
  const strArr = str.split("");
  const n = strArr.length;
  const res = StrCombination(strArr, n);
  return res;
};

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

const AlphaOrder = function(str) {
  return str
    .split("")
    .sort()
    .join("");
};

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case.
const FirstLetterUpper = function(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(" ");
};

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string.
const longestWordInString = function(str) {
  const strArr = str.split(" ");
  let longest = 0;
  let idx = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longest) {
      longest = strArr[i].length;
      idx = i;
    }
  }
  return strArr[idx];
};

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string.
const checkVowel = function(str) {
  let count = 0;
  const strArr = str.split("");
  console.log(strArr);
  strArr.forEach(el => {
    if (el === "a" || el === "e" || el === "o" || el === "i" || el === "u") {
      count++;
    }
  });
  return count;
};

// 8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not.
const checkPrime = function(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// 9. Write a JavaScript function which accepts an argument and returns the type.
const checkArgType = function(arg) {
  return typeof arg;
};

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
const NbyNIdMatrix = function(n) {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = 1;
    }
  }
  return arr;
};

// 11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively.
const findSecondLowestAndLargest = function(arr) {
  arr.splice(arr.indexOf(Math.max(...arr)), 1);
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return [Math.min(...arr), Math.max(...arr)];
};

// 12. Write a JavaScript function which says whether a number is perfect.
const checkPerfectNum = function(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum === n) {
    return true;
  }
  return false;
};

// 13. Write a JavaScript function to compute the factors of a positive integer.
const computeFactor = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
};

// 14. Write a JavaScript function to convert an amount to coins.
const amountToCoin = function(arr, n, amount) {};

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
const computeBn = function() {
  const b = prompt("input value b");
  const n = prompt("input value n");
  let result = new Array(n);
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * n;
  }
  return result[n - 1];
};

// 16. Write a JavaScript function to extract unique characters from a string.
const extractUniqueChar = function(str) {
  const result = [];
  const strArr = str.split("");
  while (strArr.length > 0) {
    const firstEl = strArr.shift();
    if (!result.includes(firstEl)) {
      result.push(firstEl);
    }
  }
  return result.join("");
};

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.
const getOccurOfLetter = function(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    if (!result.hasOwnProperty(str[i])) {
      result[str[i]] = 1;
    } else {
      result[str[i]] += 1;
    }
  }
  return result;
};

// 18. Write a function for searching JavaScript arrays with a binary search.
const binarySearch = function(arr, l, r, n) {
  if (r >= l) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] > n) {
      return binarySearch(arr, l, mid - 1, n);
    } else {
      return binarySearch(arr, mid + 1, r, n);
    }
  }
};

// 19. Write a JavaScript function that returns array elements larger than a number.
const largerThanN = function(arr, n) {
  return arr.filter(el => el > n);
};

// 20. Write a JavaScript function that generates a string id (specified length) of random characters
const randomStrGen = function(len) {
  let result = "";
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < len; i++) {
    result += char.charAt(Math.floor(Math.random() * char.length));
  }
  return result;
};

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array.
const subsetWithLen = function(arr, len) {
  if (len === 1) {
    return arr.map(el => [el]);
  }

  // Init combinations array.
  const subsets = [];

  // Remember characters one by one and concatenate them to combinations of smaller lengths.
  // We don't extract elements here because the repetitions are allowed.
  arr.forEach((currentOption, optionIndex) => {
    // Generate combinations of smaller size.
    const smallerSubsets = subsetWithLen(arr.slice(optionIndex), len - 1);

    // Concatenate currentOption with all combinations of smaller size.
    smallerSubsets.forEach(smallerSubset => {
      subsets.push([currentOption].concat(smallerSubset));
    });
  });

  return subsets;
};

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string.
const countLetterInStr = function(str, l) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === l) {
      count++;
    }
  }
  return count;
};

// 23. Write a JavaScript function to find the first not repeated character.

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
const bubbleSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

// 25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output.
const longestCountryName = function(arr) {
  let longest = 0;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
      idx = i;
    }
  }
  return arr[idx];
};

// 26. Write a JavaScript function to find longest substring in a given a string without repeatingcharacters.

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
const fn = function(fn) {};

// 29. Write a JavaScript function to get the function name.
const getFunctionName = function(fn) {
  return fn.name;
};
