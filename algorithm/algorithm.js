//1.write a JavaScript function reverse a number
function reverse(number){
    var res = Number((number + "").split("").reverse().join(""));
    console.log(res);
}

//2.Write a JavaScript function that checks whether a passed string is palindrome or not?
//O(n)
function isPalindrome(input){
    if(input.length <= 0 || input === " "){
        return "invalid input";
    }
    if(input.length === 1){
        return true;
    }
    var left = 0;
    var right = input.length - 1;
    while(left < right){
        if(input.charAt(left) !== input.charAt(right)){
            return false;
        }else{
            left++;
            right--;
        }
    }
    return true;
}

//3.Write a JavaScript function that generates all combinations of a string.
//Example string : 'dog' 
//Expected Output : d,do,dog,o,og,g


//4.Write a JavaScript function that returns a passed string with letters in alphabetical order.
function orderByAlpha(input){
    var array = input.split("");
    array.sort();
    var res = array.join("");
    console.log(res);
}

//5.Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case.
function convertUpperCase(input){
    var array = input.split(" ");
    var res = [];
    for(var i = 0; i < array.length; i++){
        res.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    res = res.join(" ");
    console.log(res);
}
 
//6.Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string.
function longestWord(input){
    var array = input.split(" ");
    var max = 0;
    var index = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].length > max){
            max = array[i].length;
            index = i;
        }
    }
    var word = array[index];
    console.log(word);
}

//7.Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. 
function countVowels(input){
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I','O','U'];
    var count = 0;
    for(var i = 0; i < input.length; i++){
        if(vowels.indexOf(input.charAt(i)) !== -1){
            count += 1;
        }
    }
    console.log(count);
}

//8.Write a JavaScript function that accepts a number as a parameter and check the number isprime or not.
function isPrime(number){
    if(number === 1){
        return false;
    }else if(number === 2){
        return true;
    }else{
        for(var i = 2; i < number; i++){
            if( number % i === 0){
                return false;
            }
        }
        return true;
    }
}

//9.Write a JavaScript function which accepts an argument and returns the type.
function theType(input){
    console.log(typeof input);
}

//10.Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(num){
    var matrix = new Array(num);
    for(var i = 0; i < num; i++){
        matrix[i] = new Array(num);
    }
    for(var row = 0; row < num; row++){
        for(var column = 0; column < num; column++){
            if(row === column){
                matrix[row][column] = 1;
            }else{
                matrix[row][column] = 0;
            }
        }
    }

    console.log(matrix);
}

//11.Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. 
function secondFour(arrayofNum){
    arrayofNum.sort();
    var second = arrayofNum[1];
    var four = arrayofNum[arrayofNum.length - 2];
    console.log(second, four);
}














//17.Write a JavaScript function to  get the number of occurrences of each letter in specified string.
// function countLetter(input){
//     var map = new Map();
//     for(var i = 0; i < input.length; i++){
//         if(map.)
//     }
// }

//18.Write a function for searching JavaScript arrays with a binary search.
function binarySearch(array, target){
    array.sort();
    var left = 0;
    var right = array.length - 1;
    while(left <= right){
        var mid = Math.round(left + (right - left)/2);
        if(array[mid] === target){
            return true;
        }else if(array[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return false;
}

//19.Write a JavaScript function that returns array elements larger than a number.
function largerThan(array, target){
    var res = [];
    array.filter(function(number){
        if(number > target){
            res.push(number);
        }
    });
    console.log(res);
}


//28.Write a JavaScript program to pass a 'JavaScript function' as parameter.
function passFunc(saySomething){
    saySomething("This is a callback function");
}

function saySomething(input){
    console.log(input)
}

//29.Write a JavaScript function to get the function name.
function getFuncName(){
    console.log( arguments.callee.name );
}

