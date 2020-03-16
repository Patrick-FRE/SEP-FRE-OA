
// JavaScript Assignment
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
function reverseNumber(number) {
     return number.toString().split('').reverse().join('');
}
function alterReverseNumber(num) {
     num = num.toString();
     let res = "";
     for (let i = num.length - 1; i >= 0; i--) {
          res += num[i]
     }
     return res;
}
// console.log(alterReverseNumber(32243));
// Expected Output : 34223

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function checkPalindrome(str) {
     let res;
     let len = Math.floor(str.length / 2);
     let j = str.length - 1;
     for (let i = 0; i < len; i++) {
          if (str[i] === str[j]) {
               res = true;
          } else {
               res = false;
          }
          j -= 1;
     }
     return res;
}
function alterCheckPalindrome(str) {
     return str.split('').reverse().join('') === str;
}
// console.log(alterCheckPalindrome("lak9lkal"));
// A palindrome is word, phrase, or sequence that reads the same backward as forward,
// e.g.,madam or nurses run.
// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' Expected Output : d,do,dog,o,og,g 
// function combinations(string) {
// let results = [];
// if (string.length < 2) return string;
// for (var i = 0; i < string.length; i++) {
//      var firstChar = string[i];
//      var charsLeft = string.substring(0, i) + string.substring(i + 1);
//      var innerPermutations = combinations(charsLeft);
//      for (var j = 0; j < innerPermutations.length; j++) {
//           results.push(firstChar + innerPermutations[j]);
//      }
// }
// return results;
//'dog' Expected Output : d,do,dog,o,og,g 


function combinations(string) {
     let results = [];
     if (string.length < 2) return string;
     for (let i = 0; i < string.length; i++) {
          for (let j = i + 1; j <= string.length; j++) {
               results.push(string.substring(i, j))
          }
     }
     console.log(results);
}
// combinations("dog")

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical
//  order. Example string : 'webmaster' Expected 
//  Output : 'abeemrstw'Assume punctuation and numbers symbols are 
//not included in the passed string

function alphabeticalOrder(string) {
     return string.split('').sort().join('')
}


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

function camelCase(string) {
     let res = "";
     string.split(' ').map(word => {
          if (word.length > 0) {
               res += word[0].toUpperCase() + word.substring(1) + ' '
          }
     })
     console.log(res);
}
// camelCase("the quick brown fox")

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function longeststring(str) {
     let max = "";
     str.split(' ').map(word => {
          if (word.length > 0) {
               if (word.length > max.length) {
                    max = word;
               }
          }
     });
     return max;

     console.log(arr);

}
// console.log(longeststring('Web Development   Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
function vowelCounter(str) {
     let counter = 0;
     str.split('').map(char => {
          switch (char) {
               case "a":
               case "e":
               case "i":
               case "o":
               case "u":
                    counter += 1;
          }
     })
     return counter;
}
// console.log(vowelCounter('The quick brown fox'));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other
// than 1 and itself.
function primeInspector(num) {
     if (num < 2) {
          return false;
     }
     let res = false;
     for (let i = 2; i < num; i++) {
          if (num % i === 0) {
               res = false;
          }
     }
     return res;
}
// console.log(primeInspector(12));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function typeChecker(arg) {
     return typeof (arg);
}
// console.log(typeChecker(undefined));


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n) {
     let arr = [];
     let innerArr = [];
     for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
               if (i === j) {
                    innerArr.push(1);
               } else {
                    innerArr.push(0)
               }
          }
          arr.push(innerArr)
          innerArr = [];

     }
     return arr;
}
// console.log(identityMatrix(5));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

function getNumbers(arr) {
     let sorted = arr.sort((a, b) => a - b);
     let unique = []
     for (let i = 0; i < arr.length; i++) {
          if (!unique.includes(sorted[i])) {
               unique.push(sorted[i])
          }

     }
     if (unique.length > 1) {
          return [unique[1], unique[unique.length - 2]];
     }
     return [unique[0], unique[0]]


}
// console.log(getNumbers([1, 4, 9, 10, 2, 1, 3, 3, 4, 5, 6]));
// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// 13. Write a JavaScript function to compute the factors of a positive integer. 

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function uniqueChar(str) {
     let obj = {};
     let res = "";
     str.split('').map(char => {
          if (!obj[char]) {
               res += char
          }
          obj[char] = char;
     })
     return res;
}
// console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function numberOfOccurence(str) {
     let obj = {}
     str.toLowerCase().split('').map(char => {
          if (char.match(/[a-z]/i)) {
               obj[char] = obj[char] + 1 || 1
          }
          return null;

     })
     return obj;
}
console.log(numberOfOccurence("tTdf ygvubhinom;,hhhh   ldcakkdjshddnsk"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and 
// smaller chunks until it finds the desired value.

function binarySearchArray(arr, val) {
     arr.sort((a, b) => a - b);
     let len = Math.floor(arr.length / 2);

     if (val < arr[len]) {
          let newArr = arr.slice(0, len);
          len = binarySearchArray(newArr, val)
     } else if (val > arr[len]) {
          let newArr = arr.slice(len)
          len = binarySearchArray(newArr, val)
     }
     if (val === arr[len]) {
          return true
     } else {
          return false
     }
}

console.log(binarySearchArray([1, 2, 3, 4, 5, 6, 7], 7));


// 19. Write a JavaScript function that returns array elements larger than a number. 

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generatesStringId() {
     return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2) + Math.random().toString().slice(2)
}
// console.log(generatesStringId());


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]



