//1
function reverseNumber(num) {
    num = num + '';
    return num.split('').reverse().join('') ;
}
//console.log(reverseNumber(123));

//2
/*
function isPalindrome(input) {
    var reverseInput = input.toLowerCase().split('').reverse().join('');
    return input === reverseInput;
}
console.log(isPalindrome(123));
console.log(isPalindrome(sees));
*/

//3
function strCombinations(input) {
    var array = [];
    for(var i = 0, j = 1; i < input.length; i++, j++) {
        array[i] = input.substring(i, j);
    }
    var combine = [];
    var temp = "";
    var combNum = Math.pow(2, array.length);
    for(var x = 0; x < combNum; x++) {
        temp= "";
        for (var y = 0; y < array.length; y++) {
            if ((x & Math.pow(2,y))){ 
                temp += array[y];
            }
        }
        if (temp !== ""){
            combine.push(temp);
        }
    }
    console.log(combine.join("\n"));
}
strCombinations("test");

//4
function reOrder(input) {
    return input.split('').sort().join('');
}
//console.log(reOrder("webmaster"));

//5
function convertFirst(input) {
    var array = input.split(' ');
    var newArray = []; 
    for(var i = 0; i < array.length; i++){
        newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    }
    return newArray.join(' ');
}
//console.log(convertFirst("the quick brown fox"));

//6
function findtheLongest(input) {
    var array = input.match(/\w[a-z]{0,}/gi);
    var result = array[0];
    for(var i = 1 ; i < array.length ; i++){
        if(result.length < array[i].length){
            result = array[i];
        } 
    }
    return result;
}
//console.log(findtheLongest('Web Development Tutorial'));

//7
function countVowel(input) {
    var counter = 0; 
    for (var letter of input.toLowerCase()){
        if (vowels.includes(letter)) {
            counter++;
        }
    }
    return counter;
}
const vowels = ["a", "e", "i", "o", "u"];
//console.log(countVowel('The quick brown fox'));

//8
function isPrime(num) {     
    var flag = true;
    for(i = 2; i <= num - 1; i++) {
        if (num % i == 0) { 
            flag = false; 
            break; 
        }
    }
    if (flag == true) {
        return true;
    } else {
        return false;
    }
}
//console.log(isPrime(7));
//console.log(isPrime(9));

//9
function checkType(input) {
    var type = typeof(input);
    return type;
}
//console.log(checkType(7));

//10 ***
function identityMatrix(num) {
    var i;
    var j;
    for (i=0; i < num; i++){
      for (j=0; j < num; j++){
           if (i === j){
             console.log(' 1 ');
           }      
           else {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }
//identityMatrix(3);

//11 ***
function findSecond(array) {
    array.sort(function(x,y){
        return x-y;
    });
    var uniqa = [array[0]];
    var result = [];
  
    for(var j=1; j < array.length; j++) {
        if(array[j-1] !== array[j]) {
            uniqa.push(array[j]);
        }
    }

    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');
}
//console.log(findSecond([1,2,3,4,5]));

//12
function isPerfect(num) {
    var temp = 0;
    for(var i = 1; i <= num / 2; i++) { //*** num / 2
        if(num % i === 0){
            temp += i;
          }
     }
   
    if(temp === num && temp !== 0) {
       return true;
    } 
     else {
        return false;
    }   
 } 
 //console.log(isPerfect(6));
 //console.log(isPerfect(7));

 //13
 function factors(n) {
    var num_factors = [], i;
 
    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
        if (n % i === 0) {
            num_factors.push(i);
            if (n / i !== i)
            num_factors.push(n / i);
        }
    }
  
    num_factors.sort(function(x, y) {
        return x - y;});  // numeric sort
    
    return num_factors;
}
//console.log(factors(15));

//14
function convertToCoins(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat( convertToCoins(left, coins) );
        } else {
            coins.shift();
            return convertToCoins(amount, coins);
        }
    }
} 
//console.log(convertToCoins(46, [25, 10, 5, 2,1]));

//15
function computeExp(base, exp) {
    if(base === 0) {
        return 0;
    }
    var res = 1;
    for(var i = 1; i <= exp; i++) {
        res = res * base;
    }
    return res;
}
//console.log(computeExp(3, 5));
//console.log(computeExp(0, 5));

//16
function findUnique(input) {
    var str = input;
    var result = "";
    for(var i = 0; i < str.length; i++) {
        if(result.indexOf(str.charAt(i)) == -1) {
            result += str[i];  
        }
    }
    return result;  
}
//console.log(findUnique("thequickbrownfoxjumpsoverthelazydog"));

//17


//18
function binarySearch(inputA, target) {
    var midPos = Math.floor(inputA.length / 2);
    if(inputA[midPos] === target) {
        return midPos;
    } else if (inputA.length === 1) {
        return null;
    } else if (inputA[midPos] < target) {
        var arrA = inputA.slice(midPos + 1);
        var res = binarySearch(arrA, target);
        if(res === null) {
            return null;
        } else {
            return midPos + 1 + res;
        }
    } else {
        var arrB = inputA.slice(0, midPos);
        return binarySearch(arrB, target);
    }
}
var myArray = [3, 6, 9];
//console.log(binarySearch(myArray, 6));

//19
// function findLarger() {

// }

//20
function idGeneater(len) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < len; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
//console.log(idGeneater(6));    

//21 ***
function getSubset(inputA, num) {
    var resultSet = [], result;
    for(var i = 0; i < Math.pow(2, inputA.length); i++) {
        result = [];
        p = inputA.length - 1; 
        do {
            if( (i & (1 << p)) !== 0) {
                result.push(inputA[p]);
           }
        } while(p--);
        if( result.length >= num) {
            resultSet.push(result);
        }
    }
    return resultSet; 
}
//console.log(getSubset([1, 2, 3], 2));

//22
function countLetter(input, letter) {
    var counter = 0;
    for(var i = 0; i < input.length; i++) {
        if(input.charAt(i) === letter) {
            counter++;
        }
    }
    return counter;
}
//console.log(countLetter('microsoft.com', 'o'));

//23
function findTheFirst(input) {
    var newArray = input.split('');
    var result = '';
    var counter = 0;
    for(var i = 0; i < newArray.length; i++) {
        counter = 0;
        for(var j = 0; j < newArray.length; j++) {
            if (newArray[i] === newArray[j]) {
                counter++;
            }
        }
        if (counter < 2) {
            result = newArray[i];
            break;
        }
    }
    return result;
}
//console.log(findTheFirst('abacddbec'));

//24


//25 ***
function longestCountryName(country_name) {
    return country_name.reduce(function(lname, country) {
    return lname.length > country.length ? lname : country;}, "");
}
//console.log(longestCountryName(["Australia", "Germany", "United States of America"]));


//28
function passFunc(id, callBack) {
    callBack();  
}
function callBack() {
    console.log('Hello');
}
//passFunc(1, callBack);

//29
function getName() {
    console.log( arguments.callee.name );
}
//getName();