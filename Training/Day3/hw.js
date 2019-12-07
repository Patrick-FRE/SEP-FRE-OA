//Day3 Homework, all practice for easy purpose do not do boundary check condition

//1 Reverse number
function reverseNum(num) {
    let n = num;
    let remain = 0,
        reverse = 0;
    while (n > 0) {
        remain = n % 10;
        reverse = reverse * 10 + remain;
        n = Math.floor(n / 10);
    }
    return reverse;
}

//console.log(reverseNum(123));

//2 Check Palindrome

function isPalidrome(word) {
    words = word.toLowerCase(); //toLowerCase is String function
    return Array.from(word).toString() === Array.from(words).reverse().toString();
}

//console.log(isPalidrome('112321')); //false

//3 Generate all combinations of a String

// function generateAllString(word) {
//     let res = [];
//     let n = word.length;


//     return res;
// }

//4 return passed String with alphabetical order
function orderAlphabetical(someString) {
    let string = someString.split(""); //convert Strings
    string.sort();
    let res = string.join();
    return res;
}

//console.log(orderAlphabetical("asdsad"));

//5 Convert the first letter of each word of the String in upper case ( does not work )
function convertFisrtLetterToUpper(someString) {
    let string = someString.split(" "); //convert Strings
    let res = [];
    for (let i = 0; i < string.length; i++) {
        res.push(string[i].charAt(0).toUpperCase() + string[i].slice(1));
    }
    res.join("");
    return res;
}
//console.log(convertFisrtLetterToUpper('what is up'));
//6 Find the longest word within the String

function longestWord(string) {
    let arr = string.split(" "); //Split String into array ["what", "is", "up"]
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr.length;
            index = i;
        }
    }
    let longestWord = arr[index];
    return longestWord;
}

//console.log(longestWord("what is up"));

//7 
function countVowels(string) {
    const checker = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let letter of string.toLowerCase()) {
        if (checker.includes(letter)) {
            count++;
        }
    }
    return count;
}
//console.log(countVowels('The quick brown fox')); //output 5

//8 Write a JavaScript function that accepts a number as a parameter and check the number isprime or not

function checkPrime(params) {
    if (params === 1) return false;
    else if (params === 2) return true;
    else {
        for (let i = 2; i < params; i++) {
            if (params % i === 0) {
                return false;
            }
        }
    }
    return true;
}
// console.log(checkPrime(5)) true

//9 Write a JavaScript function which accepts an argument and returns the type.
function returnsType(params) {
    return typeof (params); //?
}

//console.log(returnsType("null")); //string

//10
function identityMatrix(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                console.log("1");
            } else {
                console.log("0");
            }
        }
        console.log("************");

    }
}
//identityMatrix(4);

//11


// function secondGreatest(params) {
//     let res = [];
//     let n = params.length;
//     let biggest = -Infinity;
//     let secondBiggest = -Infinity;

//     for (let i = 0; i < n; i++) {
//         let num = +arrs[i]; //convert array to number
//         if (num > biggest) {
//             secondBiggest = biggest;
//             num = biggest;
//         } else if (num < biggest && num > secondBiggest) {
//             num = secondBiggest;
//         }
//     }

//     return res;
// } This idea is fine but do not work in js

function secondGreatest(params) {
    params.sort();
    let low = params[1];
    let high = params[params.length - 2];
    console.log(low, high);
}

arrs = [1, 2, 3, 4, 5];
//secondGreatest(arrs); output 2 4

//12 Perfect Number

//13 Write a JavaScript function to compute the factors of a positive integer.

function factorsOfPositiveInt(num) {
    if (num < 0) {
        return console.log("error");
    }
    let res = [];
    let quo = 0; //quotient
    for (let i = 1; i <= num; i++) {
        quo = num / i;

        if (quo === Math.floor(quo)) {
            res.push(i);
        }
    }
    return res;
}

// console.log(factorsOfPositiveInt(10));

//14 coins are sorted arrs
// function amountToCoins(amount, arrs) {
//     if (amount < 0 || arrs.length == null) {
//         return console.log("error");
//     }
//     let res = [];
//     if(amount > arrs[0]){
//         remain = amount - arrs[0]; 
//     }

//15

//16 Extract Unique characters from String

//17 JavaScript function to  get the number of occurrences of each letter in specifiedstring

//18 binary Search 
//implement with binary search algorithm
function binarySearch(arr, target) {
    arr.sort();
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.round(left + (right - left) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false; //do not find
}

//19. Write a JavaScript function that returns array elements larger than a number.

function fooFunction(arr, target) {
    let res = [];
    arr.filter(function (num) {
        if (num > target) {
            res.push(num);
        }
    });
    return console.log(res);
}
//fooFunction([1, 2, 3, 4, 5], 3); //[4,5]

//20.



// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function passFn(Fn) {
    sayHi("This is a callback function");
}

function sayHi(param) {
    console.log(param);
}

//29.write a js function to get the function name.
function getFnName() {
    return arguments.callee.name;
}