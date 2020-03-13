
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
combinations("dog")

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
camelCase("the quick brown fox")

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
