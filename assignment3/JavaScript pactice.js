// 1. Write a JavaScript function that reverse a number.  Example x = 32243; Expected Output: 34223
const reverseNumber = num => {
  let result = 0;
  while (num !== 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
};
// console.log(reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not ?
//   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const palindrome = str => {
  let phrase = str.split(" ").join("");
  let reversed = "";
  for (let i = phrase.length - 1; i >= 0; i--) {
    reversed = reversed + phrase[i];
  }
  return reversed === phrase;
};

// console.log(palindrome("nurses run"));
// console.log(palindrome("madam"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d,do, dog, o, og, g
const combinations = str => {
  for (let i = 0; i < str.length; i++) {
    let result = "";
    result = result + str[i];
    console.log(result);
    for (let j = i + 1; j < str.length; j++) {
      result = result + str[j];
      console.log(result);
    }
  }
};

// combinations("dog");

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const alphabetical = string => {
  return string
    .split("")
    .sort()
    .join("");
};

// console.log(alphabetical("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
const capitalize = str => {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  console.log(str.join(" "));
};

// capitalize("the quick brown fox");

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
const longest = str => {
  str = str.split(" ");
  let longest = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > str[longest].length) {
      longest = i;
    }
  }
  return str[longest];
};
// console.log(longest("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//   Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
const vowels = str => {
  let vowels = "aeiou";
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
// console.log(vowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other
// than 1 and itself.
const prime = num => {
  if (num <= 3) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(prime(6));

// 9. Write a JavaScript function which accepts an argument and returns the type.
//   Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const returnType = arg => {
  return typeof arg;
};

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
const matrix = n => {
  for(let i=0;i<n;i++) {
    for(let j=0;j<n;j++) {
      if(i === j) {
        console.log('1');
      }
      else {
        console.log('0');
      }
    }
    console.log('-----');
  }
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1, 2, 3, 4, 5]
// Expected Output: 2, 4
const findSecond = arr => {
  arr.sort((a, b) => {
    return a - b;
  });
  let unique = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return [unique[1], unique[unique.length - 2]];
};
// console.log(findSecond([3, 2, 4, 5, 6, 7, 6, 3, 4]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number
// itself(also known as its aliquot sum).Equivalently, a perfect number is a number that is half the sum of
// all of its positive divisors(including itself).
//   Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors,
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors:
// (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const perfect = num => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum = sum + i;
    }
  }
  return sum === num;
};
// console.log(perfect(8128));

// 13. Write a JavaScript function to compute the factors of a positive integer.
const computeFactor = num => {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
};
// console.log(computeFactor(16));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount.and 25, 10, 5, 2, 1 are coins.
//   Output : 25, 10, 10, 1
const amountToCoins = (amount, coins) => {
  if (amount === 0) {
    return [];
  }
  if (amount >= coins[0]) {
    let leftOver = amount - coins[0];
    return [coins[0]].concat(amountToCoins(leftOver, coins));
  } else if (amount < coins[0]) {
    coins.shift();
    return amountToCoins(amount, coins);
  }
};

// console.log(amountToCoins(46, [25, 10, 5, 3, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent
// and b is the bases.Accept b and n from the user and display the result.
const exponent = (base, exponent) => {
  let result = 1;
  if (exponent === 0) {
    return 1;
  }
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
};
// console.log(exponent(4, 1));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
const extractUnique = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  let result = Object.keys(obj).map(key => {
    return key;
  });
  return result.join("");
};

// console.log(extractUnique("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
const getNumber = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
};

// 18. Write a function for searching JavaScript arrays with a binary search.
const binarySearch = (myArray, searchTerm) => {
  myArray.sort((a, b) => a - b);
  if (myArray.length === 1 && myArray[0] !== searchTerm) {
    return false;
  }
  let middle = Math.floor(myArray.length / 2);
  if (myArray[middle] === searchTerm) {
    return true;
  }
  if (myArray[middle] < searchTerm) {
    let arr = myArray.slice(middle + 1);
    return binarySearch(arr, searchTerm);
  }
  if (myArray[middle] > searchTerm) {
    let arr = myArray.slice(0, middle);
    return binarySearch(arr, searchTerm);
  }
};

// console.log(binarySearch([2, 3, 4, 5, 6, 7, 8], 4));

// 19. Write a JavaScript function that returns array elements larger than a number.
const larger = (arr, num) => {
  let result = [];
  arr.forEach(element => {
    if (element > num) {
      result.push(element);
    }
  });
  return result;
};

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
const generates = len => {
  let sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < len; i++) {
    result = result + sample[Math.floor(sample.length * Math.random())];
  }
  return result;
};
// console.log(generates(20));

// 21. Write a JavaScript function to get all possible subset with a fixed length(for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
const subset = arr => {
  let result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      temp.push(arr[i]);
      temp.push(arr[j]);
      result.push(temp);
      temp = [];
    }
  }
  return result;
};

// console.log(subset([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

const conutAppearance = (str, specific) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj[specific];
};
// console.log(conutAppearance("microsoft.com", "m"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'
const notRepeated = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
};

// console.log(notRepeated("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
const bubble = arr => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
// console.log(bubble([2, 3, 4, 2, 1, 6, 4, 2, 5, 3, 3, 5, 7]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
const country = arr => {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
};
console.log(country(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
const longestSubstring = str => {
  let obj = {};
  let strArr = [];
  let result = '';
  let longest = '';
  for(let i=0;i<str.length;i++) {
    obj[str[i]] = 1;
    result = result + str[i];
    for(let j=i+1;j<str.length;j++) {
      if(!obj[str[j]]) {
        obj[str[j]] = 1;
        result = result + str[j];
        if(j === str.length -1) {
          obj = {};
          strArr.push(result);
          result = '';
          break;
        }
      }
      else if(obj[str[j]] === 1 || (j === str.length - 1)){
        obj = {};
        strArr.push(result);
        result = '';
        break;
      }
    }
  }
  strArr.forEach(element => {
    if(element.length > longest.length) {
      longest = element;
    }
  });
  console.log(longest,longest.length);
}

// longestSubstring('longestsubstring')


// 27. Write a JavaScript function that returns the longest palindrome in a given string.


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function myFunc(fn) {
  fn();
}

function fn() {
  console.log("hi");
}

// 29. Write a JavaScript function to get the function name.
function func(fn) {
  console.log(fn.name);
}

function abc() {}

func(abc);
