//#1 a function to reverse a number
/*function reverseInteger(numberToReverse) {
    var reversedNumber = numberToReverse.toString().split('').reverse().join('');
    return parseInt(reversedNumber)*Math.sign(numberToReverse);
}
console.log((reverseInteger(123)));


//#2 a function to check if a given string is a palindrome
function palindrome(str)
{
    if(str === (str.split("").reverse().join("")))
        return true;
    else
        return false;
}
console.log(palindrome("madam"));

//#3 a function to genarate combinations of a string
function combinations(str)
{
    
}

//#4 a function to organize a string in alphabetical order
function orderedString(str)
{
    var splitedString = str.split('');
    var sortedString = splitedString.sort();
    return sortedString.join('');
} 
console.log(orderedString("yvanove"));

//#5 a function that converts the first letter of each word to uppercase
function toUpperCase(str)
{
  var upperSplit = str.split(' ');
  var upperSplited = [];
    
  for(var i = 0; i < upperSplit.length; i++){
    upperSplited.push(upperSplit[i].charAt(0).toUpperCase()
    +upperSplit[i].slice(1));
  }
  return upperSplited.join(' ');
}
console.log(toUpperCase("always be grateful"));

//#6 outputing the longest word in a string
function longestWord(str)
{
    var array = str.match(/\w[a-z]{0,}/gi);
    var longest = array[0];
    for(var i = 1; i < array.length; i++)
    {
        if(longest.length < array[i].length)
            longest = array[i];
    }
    return longest;
}
console.log(longestWord("Web Development Tutorial"));

//#7 function to return the number of vowels in a string
function vowelReturn(str)
{
    var count= 0;
    var listToCheck = 'aeiouAEIOU';
    for(var i = 0; i < str.length; i ++)
    {
        //if(vowels.indexOf[str[i]] !== -1)
        if (listToCheck.indexOf(str[i]) !== -1)
            count+=1;
    }
    return count;
}
console.log(vowelReturn("shooting like Kobe"));

//#8 function to check if a number is prime
function primeNumber(isPrime)
{
    if (isPrime===1)
        return false;
    if (isPrime===2)
        return true;
    for(var i = 2; i < isPrime; i++)
    {
        if(isPrime % i === 0)
            return false;
        else
            return true;
    }
}
console.log(primeNumber(2));

//#9 a function that accepts an argument and returns the type
function typeReturn(arg){
    return typeof arg;
}
console.log(typeReturn(24));


//10 a function that returns number of rows and columns of an identity matrix
function rowsCols(n)
{
    for(let i = 0; i < n; i++)
    {
        for(let j =0; j < n; j++)
        {
            if(j===i){
                console.log('1');
            }
            else{
                console.log('0');
            }
        }
        console.log('--------');
    }
}
rowsCols(6);

//11 a function that returns the second highest and second lowest in an array
function secondHighLow(arr){
    
    arr.sort(function(x,y){
        return x-y;
    });
    var uni = [arr[0]];
    var rslt = [];
    for(var i = 1; i < arr.length; i++){
        if(arr[i-1] !== arr[i])
            uni.push(arr[i]);
    }
    
    rslt.push(uni[1],uni[uni.length-2])
    return rslt.join(',');    
}
console.log(secondHighLow([1,2,4,7,9]));


//12 a function to check if a number is perfect 
function perfectNum(num){
    var temp = 0;
    for(let i = 1; i <= num/2; i++){
        if(num%i === 0)
            temp += i;
    }
        if(temp === num && temp !== 0)
            console.log("perfect number");
        else
            console.log("not a perfect number");
}
console.log(perfectNum(28));


//13 a function to compute factors of a positive integer
function factors(num){
    var nFactors = [];
    for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
        if(num%i === 0){
            nFactors.push(i);
            if(num/i !== i){
                nFactors.push(num/i);
            }
        }
    }
    nFactors.sort(function(x,y){
        return x-y;
    });
    return nFactors;
}
console.log(factors(150));
console.log(factors(1666));

//14 a function that converts an amount to coins
function amountTocoins(amount, coins)
{
    if (amount === 0)
        return[];
    else{
        if(amount >= coins[0]){
            left = (amount-coins[0]);
            return [coins[0]].concat(amountTocoins(left,coins));
        }
    }
    coins.shift();
    return amountTocoins(amount,coins);
}
console.log(amountTocoins(46, [25, 10, 5, 2,1]));


//15 Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exp(b,n)
{
    let rslt = 1;
    for(let i = 1; i <= n; i++){
        rslt = b*rslt;
    }
    return rslt;
}
console.log(exp(2, 2));

//16 a function to extract unique characters from a string
function uniqueCharInString(strPassed){
    var str = strPassed;
    var uniqueChar = "";
    for(let i = 0; i < str.length; i++){
        if(uniqueChar.indexOf(str.charAt(i)==-1)){
            uniqueChar+=str[i];
        }
    }
    return uniqueChar;
}
console.log(uniqueCharInString("thequickbrownfoxjumpsoverthelazydog"));

//17 a function to count the occurences of each letter in a string
function charOccurence(str, charToCheck){
    var count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i)== charToCheck)
            count++;
    }
    return count;
}
console.log(charOccurence('lol', 'l'));

//18 a function for searching an array with a binary search
function array_binarySearch(narray, delement) {
    var mposition = Math.floor(narray.length / 2);
 
    if (narray[mposition] === delement){
       return mposition;
    }
    else if (narray.length === 1) 
    {
       return null;
    }
    else if (narray[mposition] < delement) {
       var arr = narray.slice(mposition + 1);
       var res = array_binarySearch(arr, delement);
       if (res === null)
       {
          return null;
       }
       else {
          return mposition + 1 + res;
       }
    }
    else {
       var arr1 = narray.slice(0, mposition);
       return array_binarySearch(arr1, delement);
    }
 }
 
  var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
  console.log(array_binarySearch(myArray, 6));
  
 //19 a function that returns array elements larger than a number. 
 function largeNumber(n){
     return function(large, index, array){
         return (large >= n);
     };
 }
 var result = [11, 45, 4, 31, 64, 10]. filter(largeNumber(10));
console.log(result);

//20 a function that generates a string ID
function generateID(str){
    var text = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < str; i ++){
        text += alphabet.charAt(Math.floor(Math.random()*alphabet.length));
    }
    return text;
}
console.log(generateID(20));
*/
