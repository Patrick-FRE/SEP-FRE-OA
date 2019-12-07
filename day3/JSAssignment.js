//1.write a function to reverse a number,,Example x = 32243;
//Expected Output : 34223  */
 function reverseNum(num){
    let sign=Math.sign(num);//get -1/1/0/Nan
    let num2=num.toString();
    let arr=num2.split('');
    let reversedarr=arr.reverse();
    let newstr=reversedarr.join("");
    let newnum=parseFloat(newstr);//can remove 0 , eg:-00123  -> -123

    return newnum * sign;

    /* return (
        parseFloat(
            num.toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(num)
    ); */
}

let num=-5123.87;
//console.log(reverseNum(num));

//2.Write a JavaScript function that checks whether a passed string is palindrome or not? 
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */
function palinadrom(str){
    let re=/[\W_]/g;
    let lowercaseStr=str.toLowerCase().replace(re, '');;
   

    console.log(lowercaseStr);
    let reverStr = lowercaseStr.split('').reverse().join('');
    //console.log(reverStr);
    if (reverStr === lowercaseStr ){
        return true;
    }else{
        return false;
    }
} 

let str2="Abcdcba";
//console.log(palinadrom(str));

/* 3. Write a JavaScript function that generates all combinations of a string. 
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
 */
function combination(str){
    let result=[];
    for(let x=0,y=1;x<str.length;x++,y++){
        result[x]=str.substring(x,y);
    }


}

let str3="dog";
//console.log(combination(str));


/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster' 
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
 */
function orderString(str){
    let re=/[\W_]/g;//remove punctuation and nubmer symbol
    let newStr=str.replace(re,'');
    let orderedStr=newStr.split('').sort().join('');
    return orderedStr;
}

let str4="webmaster";
//console.log(orderString(str4));

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox ' */
 function upFirstletter(str){
    let arr=str.split(' ');
     arr.forEach((element,index,arr) => {
        arr[index]= element.charAt(0).toUpperCase()+element.slice(1);//or substring(1)
        //console.log(arr[index]);
    });

    return arr.join(' ');
 }

 let str5="hello world";
 //console.log(upFirstletter(str5));

 /* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial' 
Expected Output : 'Development' */
 function longestword(str){
    let newarr=str.split(' ');
    let longest=newarr[0];
    for(let i=1;i<newarr.length;i++){
        if(longest.length<newarr[i].length){
            longest=newarr[i];
        }
    }
    return longest;
 }

 let str6='web development tutorial';
 //console.log(longestword(str));

/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string : 'The quick brown fox' 
Expected Output : 5 */
 function numberOfVowels(str){
    let lowerstr=str.toLowerCase();
    let count=0;

    lowerstr.split('').forEach((ele,index,arr)=>{
        if(ele === 'a' || ele === 'e' || ele === 'i' || ele ==='o' || ele ==='u'){
            count++;
            console.log(ele);
        }
    });
        
      return count;  
    
}
   
 
 let str7='The quick ';
 //console.log(numberOfVowels(str7));

 /* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */
 function checkPrimeNum(num){
    if(num ===1){
        return false;
    }else if(num === 2){
        return true;
    }else{
        for(let i=2;i<num;i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }
 }

 let num8=5;

 //console.log(checkPrimeNum(num8));
 

 /*9 . Write a JavaScript function which accepts an argument and returns the type. 
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */ 
 function getType(arg){
     let type;
     if(typeof(arg)===null){
         type=object;
     }
    return typeof(arg);
 }
 /* console.log(getType("dasdg"));
 console.log(getType(false));
 console.log(getType(6));
 console.log(getType({name:'jane'}));
 console.log(getType(undefined));
 console.log(getType(function name(){console.log("my name is jane");}));
 console.log(getType(null)); */
 
/// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function matrix(row){
    
    for(let i=0;i<row;i++){
        for(let j=0;j<row;j++){
            if(i===j){
               
                console.log(1);
            }else  console.log(0);
        }
    }

    
}

//console.log(matrix(3));


//11.Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
// greatest numbers, respectively. 
 //Sample array : [1,2,3,4,5]
//Expected Output : 2,4 
 function secondLowestHighest(arr){
    let secondlowest=0;
    let secondHighest=0;
    let newarr=[];
    if(arr.length>=0 && arr.length<4){
        console.log("array length should be greater than 3");
    }else {
        arr.sort((a,b)=>a-b);
       secondlowest=arr[1];
       secondHighest=arr[arr.length-2];
       newarr.push(secondlowest,secondHighest);
    }

    return newarr;
}

//console.log(secondLowestHighest([1,2,3,4,5]));
 

/*1 2. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its 
proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
 Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
 Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect 
 number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
 */

 function perfectNum(num){
     let arr=[1,num];
     let arr2=[1];
     for(let i=2;i<num;i++){
        if(num % i ===0){
            arr.push(i);
            arr2.push(i);
        }
     }

     //console.log("arr is:"+arr + "   arr2: "+ arr2);
     let sum1=arr.reduce((acc,ele)=>acc+ele);
     let sum2=arr2.reduce((acc,ele)=>acc+ele);
     //console.log("sum1 is:"+sum1 + "   sum2: "+ sum2);
     if(sum2 == num && sum1/2 ===num){
        return true;
     }else return false;
 }

 //console.log(perfectNum(497));



//13. Write a JavaScript function to compute the factors of a positive integer. eg:20= [1,20,2,10,4,5]
    function factors(num){
        let arr=[];
        if(num <1 || !Number.isInteger(num)){
            console.log("number should be positive");
        }else if(num === 1){
            return arr.push(1);
        }else{
            for(let i=2;i<num;i++){
                if(num % i ===0){
                    arr.push(i);
                }
            }
            return [1,...arr,num];
        }

        
    }

    let num13=17;
    //console.log(factors(num13));


/* 14. Write a JavaScript function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1*/

function convertToCoins(amount,arrCoins){
    

    let countArr=[];//push coin  in this array

    arrCoins.sort((a,b)=>b-a);//desending order

    let left=amount;
   
    for(let i=0;i<arrCoins.length;i++){
       
        let coinCount=Math.floor(left / arrCoins[i]);
        let mod=left % arrCoins[i];
        console.log(left + " count  "+coinCount + " mod  "+ mod);
        
        if(coinCount>0){
            
             for(let j=0;j<coinCount;j++){
                 //console.log(countArr);
                countArr.push(arrCoins[i]);
             }
             left=mod;
        }else{
            continue;
        }

    }
    return countArr;

}

let amount=46;
let arrCoins=[10,5,1,25];
//console.log(convertToCoins(amount,arrCoins));

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
//Accept b and n from the user and display the result.  eg:(2)3=2*2*2
function exponent(b, n ){
    let res=1;
    for(let i=0;i<n;i++){
        res = res * b;
    }
    return res;
}

let b=2;
let n=3;
//console.log(exponent(b,n));



/*16. Write a JavaScript function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"*/
function uniqueChar(str){
    let newStr='';
    for(let i=0;i<str.length;i++){
        if(newStr.indexOf(str.charAt(i)) === -1){
            newStr += str[i];
            //console.log(newStr);
        }
    }   
    return newStr; 
}

let str="thequickbrownfoxjumpsoverthelazydog";
//console.log(uniqueChar(str));

//17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function occurrences(str){
    let numberOccur={};

    for(let i=0;i<str.length;i++){
       
      numberOccur[str.charAt(i)]=1;
      if(str.charAt(i) in numberOccur){
        numberOccur[str.charAt(i)]++;
      }
      //console.log(numberOccur);
    }

    return numberOccur;
}

let str17="aaffbbdd";
//console.log(occurrences(str17));

//18. Write a function for searching JavaScript arrays with a binary search. 
//Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
    function binarySearch(arr, num){
        arr.sort((a,b)=>a-b);
        console.log(arr);

        var mid=Math.floor(arr.length /2);
        console.log(mid);

        if(arr[mid] === num){
            return mid;
        }else if(arr[mid] < num){
            let subarr=[];
        }else if(arr[mid] > num){

        }
    }

    let arr18=[12,17,5,8];
    //console.log(binarySearch(arr18,8));

//19. Write a JavaScript function that returns array elements larger than a number. 
    function myFilterLargerNumber(compare){
        return function(ele){
            return ele>compare;
        }
    }
    let arr19=[2,3,7,1,9].filter(myFilterLargerNumber(5));
    //console.log(arr19);

//20. Write a JavaScript function that generates a string id (specified length) of random characters. 
//Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    function randomid(length){
        var allcharacter="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let str='';
        for(let i=0;i<length;i++){
            let randomIndex=Math.floor(Math.random() * allcharacter.length); //0-length-1
            
            str += allcharacter.charAt(randomIndex);
        } 

        return str;
    }

    //console.log(randomid(8));
//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
//Sample array : [1, 2, 3] and subset length is 2 
//Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
var combineSubSet = function(a, subsetLength) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = subsetLength; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}
console.log(combineSubSet([1, 2, 3], 2));

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will
// count the number of occurrences of the specified letter within the string. 
//Sample arguments : 'microsoft.com', 'o' 
//Expected output : 3 

function occurence(str, letter){
    let count=0;
    
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) === letter){
            //console.log("no 22: ",count);
            count++;
        }
    }

    return count;
}

//console.log(occurence("microsoft.com",'o'));
//23. Write a JavaScript function to find the first not repeated character. 
//Sample arguments : 'abacddbec' 
//Expected output : 'e' 
    function firstNotRepeat(str){
        let count=0;
         let nonrepeatedChar='';
        for(let i=0;i<str.length-1;i++){
            

            for(let j=0;j<str.length;j++){
                if(str.charAt(i) === str.charAt(j)){
                    count++;
                }


                if(count=1){
                    nonrepeatedChar=str.charAt(i);
                    break;
                }
            }
          
        }
        return nonrepeatedChar;
       
    }

    //console.log(firstNotRepeat("abacddbec"));

//24. Write a JavaScript function to apply Bubble Sort algorithm. 
//Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort,
// is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, 
//comparing each pair of adjacent items and swapping them if they are in the wrong order". 
//Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

            }
        }
    }
    return arr;
}

let arr24=[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
//console.log(bubbleSort(arr24));

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
//Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output : "United States of America"
function Longest_Country_Name(arr){
    let longest_length=0;
    let longest_country="";

    for(let i=0;i<arr.length;i++){
        if(arr[i].length>longest_length){
            longest_length=arr[i].length;
            longest_country=arr[i];
        }
    }
    return longest_country;
}
//console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

//26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestStrWithoutRepeatChar(names)
{
    string="";
    ss="";
    namestring=names.split("");//convert to array

    for(j=0;j<namestring.length;j++) {
        for(i=j;i<namestring.length;i++) {
            if(string.includes(namestring[i]))
                break;
            else
                string+=namestring[i];
         }
         if(ss.length<string.length)
             ss=string;
         string="";
    }
    return ss;
}
console.log(longestStrWithoutRepeatChar("google.com"));

//27. Write a JavaScript function that returns the longest palindrome in a given string. 
//Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor
// problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome.
// For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring 
//is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring 
//with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
//In some applications it may be necessary to return all maximal palindromic substrings (that is, all 
//substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) 
//rather than returning only one substring or returning the maximum length of a palindromic substring.
function longestPalindrome(string) {

    var length = string.length;
    var result = "";
  
    var centeredPalindrome = function(left, right) {
      while (left >= 0 && right < length && string[left] === string[right]) {
        //expand in each direction.
        left--;
        right++;
      }
  
      return string.slice(left + 1, right);
    };
  
    for (var i = 0; i < length - 1; i++) {
      var oddPal = centeredPalindrome(i, i + 1);
  
      var evenPal = centeredPalindrome(i, i);
  
      if (oddPal.length > 1)
        console.log("oddPal: " + oddPal);
      if (evenPal.length > 1)
        console.log("evenPal: " + evenPal);
  
      if (oddPal.length > result.length)
        result = oddPal;
      if (evenPal.length > result.length)
        result = evenPal;
    }
    return "the palindrome is: " + result + " and its length is: " + result.length;
  };
  
  console.log(
    longestPalindrome("nan noon is redder")
  );

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

Array.prototype.myfilter=function(callbackfunc){
    let newarr=[];
   for(let i=0;i<this.length;i++){
       if(callbackfunc(this[i])){
           newarr.push(this[i]);
       }
   }
   return newarr;
}

//console.log([2,4,5,1].myfilter(ele=>ele>2));

//29. Write a JavaScript function to get the function name. 
function getName(){
    return (arguments.callee.name);
}

//console.log(getName());

