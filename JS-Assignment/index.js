//1 reverse a number
function reverseNum(num){
    return(
    parseFloat(num.toString().split('').reverse().join('')) 
    * Math.sign(num)
    )
}
console.log(reverseNum(32243))//34223

//2 Check a string whether is palindrome
function isPalindorme(string){
    return string === string.split('').reverse().join('');
}
console.log(isPalindorme('abcba')); //true
console.log(isPalindorme('abcdba')) //false

//3 Write a JavaScript function that generates all combinations of a string.
function subString(string){
    let array1 = [];
    for (var x = 0, y=1; x < string.length; x++,y++) {
        array1[x]=string.substring(x, y);
    }
    let combi = [];
    let temp= "";
    let slent = Math.pow(2, array1.length);
    for (let i = 0; i < slent ; i++){
        temp= "";
        for (let j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){ 
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }   
  return combi.join("\n");
}
console.log(subString('dog')); //d o do g dg og dog

//4 Write a JavaScript function that returns a passed string with letters in alphabetical order
function alphabetOrder(str){
    return str.split('').sort().join('')
}
console.log(alphabetOrder('wabmaster')) //abeemrstw

//5 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function uppercase(str){
    let arr = str.split(' ');
    let res = [];
    for(let i =0; i<arr.length;i++){
        res.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
    }
    return res.join(' ');
}
console.log(uppercase("the quick brown fox")); // The Quick Brown Fox

//6 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str){
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++){
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

//7 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1){
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++){
    if (vowel_list.indexOf(str1[x]) !== -1){
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

//8 Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
function test_prime(n){
  if (n===1){
    return false;
  }
  else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

//9 Write a JavaScript function which accepts an argument and returns the type. 
function detect_data_type(value){
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;  
    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]){
                return dtypes[x];
            }
      }
    }  
    return typeof value;
}
console.log(detect_data_type(12));//number
console.log(detect_data_type('w3resource')); //string
console.log(detect_data_type(false)); //boolean

//10 Write a JavaScript function which returns the n rows by n columns identity matrix
function matrix(n) {
    var i;
    var j;
    for (i=0; i < n; i++){
      for (j=0; j < n; j++){
           if (i === j){
             console.log(' 1 ');
           }               
           else {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }
matrix(4);
// 1 
//  0 
//  0 
//  0 
// ----------
//  0 
//  1 
//  0 
//  0 
// ----------
//  0 
//  0 
//  1 
//  0 
// ----------
//  0 
//  0 
//  0 
//  1 
// ----------

//11 Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function Second_Greatest_Lowest(arr_num){
  arr_num.sort(function(x,y){
        return x-y;
    });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++){
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5])); //2,4

//12 Write a JavaScript function which says whether a number is perfect.
function is_perfect(number){
var temp = 0;
   for(var i=1;i<=number/2;i++){
         if(number%i === 0)
          {
            temp += i;
          }
     }  
     if(temp === number && temp !== 0){
       console.log("It is a perfect number.");
        } 
     else{
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(28);

//13  Write a JavaScript function to compute the factors of a positive integer. 
function factors(n){
 var num_factors = [], i;
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0){
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y){
     return x - y;});  // numeric sort
     return num_factors;
}

console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]

//14. Write a JavaScript function to convert an amount to coins. 
function amountTocoins(amount, coins) {
 if (amount === 0) {
     return [];
   } 
 else{
     if (amount >= coins[0]) {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else{
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exp(b,n){
    var ans = 1;
    for (var i =1; i <= n; i++){
        ans = b * ans;        
    }
    return ans;
}
console.log(exp(2, 3));  //8

//16 Write a JavaScript function to extract unique characters from a string
function unique_char(str1){
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++){
 if(uniql.indexOf(str.charAt(x))==-1){
  uniql += str[x];  
   }
}
  return uniql;  
}  
console.log(unique_char("abbbbbcccefgqweegz"));//abcefgqwz

//17 Write a JavaScript function to  get the number of occurrences of each letter in specified strin
function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

//18 Write a function for searching JavaScript arrays with a binary search. 
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
  console.log(array_binarySearch(myArray, 6)); //4

//19 Write a JavaScript function that returns array elements larger than a number.
  function BiggerElements(val){
     return function(evalue, index, array){
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);//[11,45,31,64,10]

//20 Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l){
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ ){  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8)); // iLecBNRQ

//21 Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array
function subset(arra, arra_size){
    var result_set = [], 
        result;  
   
    for(var x = 0; x < Math.pow(2, arra.length); x++){
    result = [];
    i = arra.length - 1; 
     do{
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);
    if( result.length >= arra_size){
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2)); //[ [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 3, 2, 1 ] ]

//22 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string
function char_count(str, letter) {
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o')); //2 

//23 Write a JavaScript function to find the first not repeated character
function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log(find_FirstNotRepeatedChar('abacddbec')); //e

//24 Write a JavaScript function to apply Bubble Sort algorithm. 
function bubble_Sort(a){
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++){
            if (x[i] < x[i+1]){
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
// [
//   3223, 546, 455, 345, 234,
//   213, 122,  98,  84,  64,
//   23,  12,   9,   4,   1
//   ]

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output
function Longest_Country_Name(country_name){
  return country_name.reduce(function(lname, country) {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
//"United States of America"

//26 Write a JavaScript function to find longest substring in a given a string without repeating characters
function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for(var i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]]) { 
            str += curr_char; 
            hash[chars[i]] = {index:i};
        }
        else {
            if(longest_string.length <= str.length){
            longest_string = str;
            }
            var prev_dupeIndex = hash[curr_char].index;
            var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (var j = prev_dupeIndex + 1; j <= i; j++){
            hash[input.charAt(j)] = {index:j};
            }
        }   
    }
    return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("google.com")); 
//gle.com

//27 Write a JavaScript function that returns the longest palindrome in a given string. 
function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}
    
function longest_palindrome(str1){
    var max_length = 0,
    maxp = '';
    for(var i=0; i < str1.length; i++) {
    var subs = str1.substr(i, str1.length);
        for(var j=subs.length; j>=0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
            continue;
    
            if (is_Palindrome(sub_subs_str)){
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    } 
    return maxp;
}
console.log(longest_palindrome("abracadabra")); //aca

//28 Write a JavaScript program to pass a 'JavaScript function' as parameter
function WriteACallBack(n, callBackFn){
    callBackFn(n);
}

function AFunction(n){
    console.log(`Hello World I'm ${n}`)
}

WriteACallBack('Peter',AFunction);// Hello World I'm Peter

//29. Write a JavaScript function to get the function name. 
function thisIsAFunction(){
    console.log(arguments.callee.name)
}
thisIsAFunction(); //thisIsAFunction