//1. Write a function that reverses a number
let x = 32243
const reverseNum = (num) => {
    return num.toString().split('').reverse().join('');
}
//expected output: 34223
//console.log(reverseNum(x))

//2. function that checks if a string is a palindrome or not
let str = 'Nurses run';
const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\s/g, '')
    return (str === str.split('').reverse().join(''))
}

//console.log(isPalindrome(str));

//3. Write a function that generates all combinations of a string



//4. Write a function that returns a string with letters in alphabetical order.
let string = 'helloworld'
const orderString = (str) => {
    return str.split('').sort().join('');
}

//console.log(orderString(string))

//5. Write a function that accepts a string and converts first letter of each string to upper case.

const convertFirstLetter = (str) => { 
    str = str.replace(str[0],str[0].toUpperCase())
    for (let i = 0; i < str.length; i++) {
        if (str[i]=== ' ') {
            str = str.replace(str[i+1],str[i+1].toUpperCase())
        }
    }
    return str
}

//console.log(convertFirstLetter('hello world happy'))

//6. Write a function that takes in a string and returns the longest word

const longestWord = (string) => {
    string = string.split('');
    string.push(' ');
    let longest = ''
    let current = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i]!== ' ') {
            current +=string[i]
        }
        else {
            if (current.length > longest.length){
                longest = current;
            }
            current = '';
        }
    }
    return longest;
}

//console.log(longestWord('web development'))
//7.Write a function that counts the number of vowels in a string.
const vowelCounter = (string) => {
    string = string.match(/[aeiou]/gi)
    return string.length;
}
vowelCounter('hellonworld')

//8. Write a function that checks if a number is prime or not

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}


//9. Write a function that accepts an argument and returns its type.

const checkType = (arg) => {
    if (Array.isArray(arg)) return 'array';

    return typeof arg
}

//10 Write a function which returns the n x n identity matrix


//11 Take an array of numbers and return the second highest and second greatest
const seconds = (array) => {
    array = array.sort()
    return [array[1],array[array.length-2]]
}
//console.log(seconds([1,2,3,4,5,6,7,8,9]))

//12 perfect number


//13 given a positive integer, compute its factors.

//14 Convert amount to coins
// const amountToCoins = (coins,valArr) => {

// }
// var arr = [25,10,5,2,1]
// console.log(amountToCoins(86,arr))

//15 calculate exponent two parameters b^n
const pow = (b,n) => {
    let output = b;
    for (let i = 0; i < n; i++) {
        output*=b;
    }
    return output;
}

//console.log(pow(2,3))

//16


//17 Write a function to get the number of occurrences of a letter in a string
const find = (str,letter) => {
    let regex = new RegExp(letter,'g')
    str =  str.match(regex);
    return str.length;
}
//console.log(find('hello world','l'))
//19 Write a function that returns array elements larger than a number

const largerThan = (array, num) => {
    return array.filter(el => el > num);
}

//Write a function to get a function name


//console.log(myFunction())