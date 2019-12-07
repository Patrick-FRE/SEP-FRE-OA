// //01
// function reverse(num){
//     return Math.sign(num) * parseInt(num.toString().split('').reverse().join(''));
// }

// console.log(reverse(-3224300));

// //02
// function isPalindrome(s){
//     let reverse = s.split('').reverse().join('');
//     return s === reverse;
// }

// console.log(isPalindrome('eyepops'));

// //03
// function combination(s){
//     let res = [];
//     for(let i=0; i< s.length; i++){
//         for(let j= i + 1; j< s.length+1; j++){
//             res.push(s.slice(i,j));
//         }
//     }
//     return res;
// }

// console.log(combination('dog'));

// //04
// function alphabetical(s){
//     let codeArray=[];
//     for(let i=0; i < s.length; i++){
//         codeArray.push(s.charCodeAt(i));
//     }
//     let res='';
//     codeArray.sort((a, b)=> a - b);
//     for(let j=0;j < codeArray.length; j++){
//         res += String.fromCharCode(codeArray[j]);
//     }
//     return res;
// }

// console.log(alphabetical('webmaster'));

// 05
// function uppercaseFirst(s){
//     const regex = /\W/g;
//     let wordlist = s.split(' ');
//     let capitalizedList = [];
//     for(let i = 0; i < wordlist.length; i++){
//         // capitalizedWord = wordlist[i][0].toUpperCase() + wordlist[i].slice(1);
//         capitalizedList.push(wordlist[i][0].toUpperCase() + wordlist[i].slice(1));
//     }
//     return capitalizedList.join(' ');
// }

// console.log(uppercaseFirst('the quick brown fox'));

// 06
// function longestWord(s){
//     let wordList = s.split(' ');
//     let longest = 0;
//     for(i = 0; i< wordList.length; i++){
//         if(wordList[i].length > longest){
//             longest = wordList[i].length;
//             longestWord = wordList[i];
//         }
//     }
//     return longestWord;
// }

// console.log(longestWord('web development tutorial'));

//07 
// function countVowels(s){
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for(let i = 0; i < s.length; i++){
//         if(vowels.includes(s[i])){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels('the quick brown fox'));

//08
// function isPrime(num){
//     if(num > 1){
//         for(let i = 2; i < Math.sqrt(num); i++){
//             if( num % i === 0){
//                 return false;
//             }
//         }
//     }
//     return true;  
// }

// console.log(isPrime(10));

//09
// function type(arg){
//     return typeof(arg);
// }
// console.log(type(1));
// console.log(type('s'));
// console.log(type(true));
// console.log(type(isPrime));
// console.log(type({}));
// var a;
// console.log(type(a));

//10
// function myMatrix(n){
//     return Array(n).fill().map(()=> Array(n));
// }

// console.log(myMatrix(4));

// //11
// function findSecond(arr){
//     arr.sort((a, b) => a - b);
//     return [arr[1],arr[arr.length-2]];
// }

// console.log(findSecond([1,2, 6, 3, 4, 5]));

//12
// function perfectNumber(num){
//     let sum = 0;
//     for(let i = 0; i <= num/2; i++){
//         if( num % i === 0){
//             sum += i;
//         }
//     }
//     return num === sum;
// }
// console.log(perfectNumber(28));

//13
// function factors(num){
//     let arr=[];
//     for(let i = 0; i <= num/2; i++){
//         if(num % i === 0){
//             arr.push(i);
//         }
//     }
//     arr.push(num);
//     return arr;
// }

// console.log(factors(8));

//14
// function convertToCoins(amount, arr){
//     let res = [];
//     for(let i = 0; i< arr.length; i++){
//         while (amount >= arr[i]){
//             res.push(arr[i]);
//             amount -= arr[i];
//         }
//     }
//     return res;  
// }
// console.log(convertToCoins(46, [25, 10, 5, 2, 1]));


//15
// function exponent(b, n){
//     let res = 1;
//     for(let i = 0; i < n; i++){
//         res *= b
//     }
//     return res;
// }
// console.log(exponent(2,10));

// //16
// function unique(s){
//     let res ='';
//     for(let i =0; i < s.length; i++){
//         if(res.includes(s[i])){
//             continue;
//         }else{
//             res += s[i];
//         }
//     }
//     return res;
// }
// console.log(unique('thequickbrownfoxjumpsoverthelazydog'));


// //17
// function occurrences(s){
//     let hash={};
//     for(let i =0; i < s.length; i++){
//         if(hash.hasOwnProperty(s[i])){
//             hash[s[i]]++;
//         }else{
//             hash[s[i]] = 1;
//         }
//     }
//     return hash;
// }

// console.log(occurrences('thethelazydog'));

// //18
// function binarySearch(arr, x){
//     arr.sort((a, b) => a - b);
//     if(x < arr[0] || x > arr[arr.length-1]){
//         return "Not found";
//     }
//     let mid = Math.floor((arr.length - 1) / 2);
//     if(arr[mid] === x){
//         return "Found";
//     }
//     else if( x < arr[mid]){
//         return binarySearch(arr.slice(0, mid), x);
//     }
//     else if(x > arr[mid]){
//         return binarySearch(arr.slice(mid + 1), x);
//     }
// }

// console.log(binarySearch([1, 3, 5, 7, 8, 9], 4));

// //19 
// function largerThanANumber(arr, num){
//     return arr.filter(item => item > num);
// }

// console.log(largerThanANumber([1, 3, 5, 7, 8, 9], 4));

// //20
// function randomID(len){
//     let res ='';
//     const char_list='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for(let i = 0; i < len; i++){
//         res += char_list[Math.floor(Math.random() * char_list.length)];
//     }
//     return res;
// }

// console.log(randomID(10));

//21 **
// function combine(arr, min) {
//     var helper = function(n, src, curr, res) {
//         if (n == 0) {
//             if (curr.length > 0) {
//                 res[res.length] = curr;
//             }
//             return;
//         }
//         for (let j = 0; j < src.length; j++) {
//             helper(n - 1, src.slice(j + 1), curr.concat([src[j]]), res);
//         }
//         return;
//     }
//     let res = [];
//     for (var i = min; i < arr.length; i++) {
//         helper(i, arr, [], res);
//     }
//     res.push(arr);
//     return res;
// }

// console.log(combine([1, 2, 3], 2));

//22
// function letterOccurrences(s, l){
//     let count = 0;
//     for(let i=0; i < s.length; i++){
//         if(s[i] === l){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(letterOccurrences('microsoft.com', 'o'));

//23
// function firstNotRepeat(s){
//     for(let i = 0; i < s.length; i++){
//         let char = s[i];
//         if(s.indexOf(char) === i && s.indexOf(char, i+1) === -1){
//             return char;
//         }
//     }
//     return null;  
// }

// console.log(firstNotRepeat('abacddbec'));

//24
// function bubbleSort(arr){
//     let swap = true;
//     while(swap){
//         swap = false;
//         for (let i = 0; i < arr.length - 1; i++){
//             if(arr[i] < arr[i+1]){
//                 temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swap = true;
//             }
//         }
//     }
//     return arr;  
// }

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//25
// function longestCountryName(arr){
//     let longest = 0;
//     let country = null;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > longest){
//             longest = arr[i].length;
//             country = arr[i];
//         }
//     }
//     return country;
// }

// console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

//26
// function longestSubstringNorepeated(str){
//     let res = ''
//     for(let i = 0; i < str.length; i++){
//         if(res.includes(str[i])){
//             continue;
//         }else{
//             res += str[i];
//         }
//     }
//     return res;
// }

// console.log(longestSubstringNorepeated('therearetwo'));

//27
// function longestPalindrome(s){
//     let res = [];
//     let longest = 0;
//     for(let i = 0; i < s.length; i++){
//         for(let j = s.length - 1; j > i; j--){
//             order = s.slice(i, j + 1);
//             reversed = order.split('').reverse().join('');
//             if(order === reversed && order.length >= longest){
//                 longest = order.length;
//                 res.push(order);
//             }
//         }
//     }
//     return res;
// }

// console.log(longestPalindrome('abracadabra'));

//28
// Array.prototype.myReduce = function (callback, inialValue){
//     let res = inialValue;
//     this.forEach(item => {
//         if(inialValue === undefined){
//             inialValue = this[0];
//             res = this[0];
//         }else{
//             callback(res, item);
//         } 
//     });
//     return res;

// }

// const arr = [1, 3, 5];
// console.log(arr.reduce((a, b)=> a + b));

//29
// function functionName() {
//     console.log( arguments.callee.name );
// }

// functionName();


//myFilter
// Array.prototype.myFilter = function (cb) {
//     let res = [];
//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i])){
//             res.push(this[i]);
//         }     
//     }
//     return res;
// }

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.myFilter(word => word.length > 6);
// console.log(result);
