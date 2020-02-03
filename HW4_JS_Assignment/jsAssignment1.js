// 1. Write a JavaScript function that reverse a number.
// x = 32243;
// ======================================================

// function reverseNumber(num) {
//   var str = num.toString();
//   var newString = '';

//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   console.log(newString);
//   return newString;
// }
// reverseNumber(32243);

// ======================================================
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// ======================================================

// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       console.log(false);
//       return false;
//     }
//     console.log(true);
//     return true;
//   }
// }
// isPalindrome('racecar');

// ======================================================
// 3. Write a JavaScript function that generates all combinations of a string.
// ======================================================

// var combinations = function(string) {
//   var result = [];

//   var loop = function(start, depth, prefix) {
//     for (var i = start; i < string.length; i++) {
//       var next = prefix + string[i];
//       if (depth > 0) loop(i + 1, depth - 1, next);
//       else result.push(next);
//     }
//   };

//   for (var i = 0; i < string.length; i++) {
//     loop(0, i, '');
//   }
//   console.log(result);
//   return result;
// };
// combinations('dog');

// ======================================================
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// ======================================================

// function alphabet_order(str) {
//   return str
//     .split('')
//     .sort()
//     .join('');
// }
// console.log(alphabet_order('webmaster'));

// ======================================================
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
// ======================================================

// function upper_case(str) {
//   var strArr = str.split(' ');
//   var newStrArr = [];

//   for (let i = 0; i < strArr.length; i++) {
//     newStrArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
//   }
//   return newStrArr.join(' ');
// }
// console.log(upper_case('the quick brown fox'));

// ======================================================
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
// ======================================================

// function longestWord(str) {
//   var strArr = str.split(' ');
//   var result = strArr[0];
//   for (let i = 1; i < strArr.length; i++) {
//     if (result.length < strArr[i].length) {
//       result = strArr[i];
//     }
//   }
//   return result;
// }
// console.log(longestWord('Web Development Tutorial'));

// ======================================================
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
// ======================================================

// function vowel_counter(str) {
//   var strArr = str.split('');
//   var count = 0;
//   for (let i = 0; i < strArr.length; i++) {
//     if (
//       strArr[i] == 'a' ||
//       strArr[i] == 'e' ||
//       strArr[i] == 'i' ||
//       strArr[i] == 'o' ||
//       strArr[i] == 'u' ||
//       strArr[i] == 'A' ||
//       strArr[i] == 'E' ||
//       strArr[i] == 'I' ||
//       strArr[i] == 'O' ||
//       strArr[i] == 'U'
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowel_counter('The quick brown fox'));

// function vowel_counter2(str) {
//   var vowel_list = 'aeoiuAEIOU';
//   var count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowel_list.indexOf(str[i]) != -1) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowel_counter2('The quick brown fox'));

// ======================================================
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// ======================================================

// function isPrime(num) {
//   var count = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//   }
//   if (count > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(isPrime(29));

// ======================================================
// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// ======================================================

// function dataType(input) {
//   return typeof input;
// }
// console.log(dataType(123));
// console.log(dataType('test'));
// console.log(dataType({}));
// console.log(dataType(true));
// console.log(dataType(dataType()));
// console.log(dataType());

// ======================================================
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// ======================================================

// function matrixIdentity(num) {
//   var result = new Array(num);

//   for (let i = 0; i < result.length; i++) {
//     result[i] = new Array(num);
//     for (let j = 0; j < result[i].length; j++) {
//       if (i == j) {
//         result[i][j] = 1;
//       } else {
//         result[i][j] = 0;
//       }
//     }
//   }
//   return result;
// }
// console.log(matrixIdentity(5));

// ======================================================
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
// ======================================================

// function secondPlace(arr) {
//   var sortedArr = arr.sort();
//   var result = [];
//   for (let i = 1; i < sortedArr.length - 1; i++) {
//     result.push(sortedArr[i]);
//   }
//   return result;
// }
// console.log(secondPlace([1, 2, 3, 4, 5]));
// console.log(secondPlace([1, 2, 0, 3, 4, 5, 5, 4, 2, 1, 9]));

// ======================================================
// 12. Write a JavaScript function which says whether a number is perfect.
// ======================================================

// function isPerfectNumber(num) {
//   var divisors = 0;
//   for (let i = 0; i < num - 1; i++) {
//     if (num % i == 0) {
//       divisors = divisors + i;
//     }
//   }
//   if (divisors == num) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPerfectNumber(6));
// console.log(isPerfectNumber(496));
// console.log(isPerfectNumber(8128));
// console.log(isPerfectNumber(8200));

// ======================================================
// 13. Write a JavaScript function to compute the factors of a positive integer.
// ======================================================

// function findFactor(num) {
//   var factors = [];
//   for (let i = 0; i < num; i++) {
//     if (num % i == 0) {
//       factors.push(i);
//     }
//   }
//   return factors;
// }
// console.log(findFactor(50));

// ======================================================
// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// ======================================================

// function amountTocoins(amount, coins) {
//   if (amount === 0) {
//     return [];
//   } else {
//     if (amount >= coins[0]) {
//       left = amount - coins[0];
//       return [coins[0]].concat(amountTocoins(left, coins));
//     } else {
//       coins.shift();
//       return amountTocoins(amount, coins);
//     }
//   }
// }
// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// ======================================================
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases.
// Accept b and n from the user and display the result.
// ======================================================

// function exponent(bn) {
//   var digits = bn.toString().split('');
//   var pow = parseInt(digits[1]);
//   var base = parseInt(digits[0]);
//   return Math.pow(base, pow);
// }
// console.log(exponent(53));

// ======================================================
// 16. Write a JavaScript function to extract unique characters from a string.
// Example string :  "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
// ======================================================

// function uniqueChar(str) {
//   var result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (result.indexOf(str.charAt(i)) == -1) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'));

// ======================================================
// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
// ======================================================

// ======================================================
// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// ======================================================

// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === elem ? middle : -1;
// }

// binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);

// ======================================================
// 19. Write a JavaScript function that returns array elements larger than a number.
// ======================================================

// function BiggerElements(val)
//    {
//      return function(evalue, index, array)
//      {
//      return (evalue >= val);
//      };
//    }
// var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
// console.log(result);

// ======================================================
// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// ======================================================

// function stringId(str) {
//   var strArr = str.split('');
//   var strIdArr = new Array(str.length);

//   for (let i = 0; i < strArr.length; i++) {
//     strIdArr[i] = new Array(str.length);
//     strIdArr[i][0] = strArr[i];
//     strIdArr[i][1] = i;
//   }
//   return strIdArr;
// }
// console.log(
//   stringId('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
// );

// ======================================================
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
// ======================================================

// ======================================================
// 22. Write a JavaScript function that accepts two arguments, a string and a letter,
// and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
// ======================================================

// function letterCount(argument, letter) {
//   var count = 0;
//   for (let i = 0; i < argument.length; i++) {
//     if (letter.indexOf(argument.charAt(i)) != -1) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(letterCount('microsoft.com', 'o'));

// ======================================================
// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
// ======================================================

// function nonRepeat(str) {
//   var strCar = str.split('');
//   console.log(strCar);
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (strCar[j].indexOf(str.charAt(i)) == -1) {
//         return str[i];
//       }
//     }
//   }
// }
// console.log(nonRepeat('abacddbec'));
