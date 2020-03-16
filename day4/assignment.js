//1 Write a JavaScript function that reverses a number.
//Ex. x = 32243
//Expected: 34223
function reverse (num) {
  let string = num.toString();
  let res = "";
  for (let i = string.length - 1; i >= 0; i--) {
    res += string[i];
  }
  return parseInt(res)
}

console.log("1: ", reverse(32243));

//2 Write a JavaScript function that checks whether a passed string is a palindrome or not?
//Ex. madam or nurses run
const palindrome = word => {
  let reversed = word.split('').reverse().join('');
  return reversed === word ? true : false;
};

console.log("2: ", palindrome('car'));

//3 Write a JavaScript function that generates all combinations of a string
//Ex. string: 'dog'
// output: d, do, dog, o, og, g
// function combinations(word) {
//   word.eachIndex(idx => {

//   })
// }
console.log("3: ")


//4 Write a JavaScript function that returns a passed string with letters in alphabetical
// string: 'webmaster'
// output: 'abeemrstw'
function sorted(str) {
  return str.split('').sort().join('');
}
console.log("4: ", sorted('webmaster'));


//5 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// string: 'the quick brown fox'
// output: 'The Quick Brown Fox'
function upperCase(str) {
  return str.toUpperCase();
}
function capital(str) {
  let reg = /(^|\s)[a-z]/g;
  return str.replace(reg, upperCase);
}
console.log("5: ", capital('the quick brown fox'));

//6 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// string : 'Web Development Tutorial'
// output: 'Development'
function longest(str) {
  let words = str.split(' ');
  let max = str[0];
  for (let i = 1; i < words.length; i++) {
    if (max.length < words[i].length){
      max = words[i];
    }
  }
  return max;
}
console.log("6: ", longest('Web Development Tutorial'));


//7 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// string: 'The quick brown fox'
// output: 5 
function vowels(str){
  let sum = 0;
  let vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])){
      sum++;
    }
  }
  return sum;
}
console.log("7: ", vowels('The quick brown fox'));

//8 Write a JavaScript function that accepts a number as a parameter and check the 
//number is prime or not.
function isPrime(num) {
  for (let i = 2; i < num; i++){
    if (num % i === 0 && num !== i){
      return false;
    }
  }
  return true;
}
console.log("8: ", isPrime(2), isPrime(4));

//9 Write a JavaScript function which accepts an argument and returns the type.
//There are 6 possible values that typeof returns: object, boolean, function, number, string, and undefined.
function findType (arg) {
  return typeof arg;
}
console.log("9: ", findType([1,2,3]), findType(true), findType("this"));
//10 Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr[i].push(1) + '\n';
      } else {
        arr[i].push(0);
      }
    }
  }
  return arr;
}
console.log("10: ", matrix(3));

//11 Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Array: [1,2,3,4,5]
// Output: 2, 4
function secondLowHigh(arr) {
  let sorted = arr.sort();
  return [sorted[1], sorted[sorted.length-2]]
}
console.log("11: ", secondLowHigh([1,2,3,4,5]));
//12 Write a JavaScript function which says whether a number is perfect.
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++){
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num && sum !== 0) {
    return num + " is perfect";
  } else {
    return num + " is not perfect";
  }
}
console.log("12: ", isPerfect(5), isPerfect(6), isPerfect(28));


//13 Write a JavaScript function to compute the factors of a positive integer.
function factors(num) {
  let factorsArr = [];
  for (let i = 1; i < num; i++){
    if (num % i === 0){
      factorsArr.push(i);
    }
  }
  return factorsArr;
}
console.log("13: ", factors(24));


//14. Write a JavaScript function to convert an amount to coins.
// Sample func: amountTocoins(46, [25,10,5,2,1])
// Here 46 is the amount and 25,10,5,2,1 are coins
// output: 25, 10, 10, 1
function amountToCoins(amount, coins) {
  if (amount === 0) return [];
  if (amount >= coins[0]){
    amount -= coins[0];
    return [coins[0]].concat(amountToCoins(amount, coins));
  } else {
    coins.shift();
    return amountToCoins(amount, coins);
  }
}
console.log("14: ", amountToCoins(46, [25, 10, 5, 2, 1]));

//15 Write a JavaScript function to compute the value of bn where n is the exponent and b is the base.
//Accept b and n from the user and display the result.
function exponent(b, n) {
  return b ** n;
}
console.log("15: ", exponent(5, 2));


//16 Write a JavaScript function to extract unique character from a string.
// string: 'thequickbrownfoxjumpsoverthelazydog'
// output: 'thequickbrownfxjmpsvlazydg';
function uniqStr(str) {
  
}
console.log("16: ", uniqStr('thequickbrownfoxjumpsoverthelazydog'));

//17 Write a JavaScript function to get the number of occurrences of each letter in specified string.
console.log("17: ")


//18 Write a function for searching JavaScript arrays with a binary search.
function binarySearch(arr, target) {
  
}
console.log("18: ", );

//19 Write a JavaScript function that returns array elements larger than a number
function largerElements(arr, num){
  return arr.filter(el => el > num);
}
console.log("19: ", largerElements([2, 4, 6, 8, 10, 13, 14, 15], 6));


//20 Write a JavaScript function that generates a string id (specified length) of random characters.
function randomString (num) {
  let str = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < num; i++) {
    let random = Math.random() * characters.length;
    str += characters.charAt(Math.floor(random));
  }
  return str;
}

console.log("20: ", randomString(4));


//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
//combinations in an array.
// Array: [1,2,3] and subset length is 2
// Output: [[2,1],[3,1],[3,2],[3,2,1]]
function allCombs (arr, len) {

}
console.log("21: ", allCombs([1,2,3], 2));

//22. Write a JavaScript function that accepts two arguments, a string and a letter and will count the number of occurrences of the specified letter within the string.
// Arguments: 'microsoft.com', 'o'
// output: 3
function count (str, letter) {
  let count = 0;
 for (let i = 0; i < str.length; i++){
  if (str[i] === letter) {
    count++;
  }
 }
 return count;
}
console.log("22: ", count('microsoft.com', 'o'));


//23 Write a JavaScript function to find the first not repeated chafacter.
// arguments: 'abacddbec'
// output: 'e'
function notRepeated (str) {
  str = str.split('');
  let res = '';
  let count = 0;

  str.forEach(letter => {
    count = 0;
    str.forEach(letter2 => {
      if (letter === letter2) {
        count += 1;
      }
    });
    if (count < 2) {
      res = letter;
    }
  });
  return res;
}
console.log("23: ", notRepeated('abacddbec'));


//24 Write a JavaScript function to apply Bubble Sort algorithm.
// Array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i+1]){
        swap(arr, i+1, i);
        swapped = true;
      }
    }
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}
console.log("24: ", bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));



//25 Write a JavaScript function that accept a list of country names as input and returns
//the longest country name as output
// function: Longest_CountryName(['Australia', 'Germany', 'United States of America'])
// output: 'United States of America'
function Longest_CountryName(arr) {
  if (arr.length === 1){
    return arr[0];
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (arr[i].length > max.length){
      max = arr[i];
    }
  }
  return max;
}
console.log("25: ", Longest_CountryName(['Australia', 'Germany', 'United States of America']));
//26 Write a JavaScript function to find longest substring in a given string without repeating characters
console.log("26: ") 


//27 Write a JavaScript function that returns the longest palindrome in a given string.
console.log("27: ")


//28 Write a JavaScript program to pass a 'JavaScript function' as parameter.
console.log("28: ")


//29 Write a JavaScript function to get the function name.
console.log("29: ")
