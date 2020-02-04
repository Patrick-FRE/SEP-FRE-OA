//Jia

//1.
function reverseNumber(num) {
    let n = num.toString();
    return +(n.split("").reverse().join("")); 
    //better to not use Number, will be an object
    //join returns primitive string type
}
//console.log(reverseNumber(32243));


//2.
function checkPalindrome(str) {
    return str === str.split("").reverse().join("");
}
//console.log(checkPalindrome("rar"));
//space complexity issue


//3.
function generateCombo(str) {
    let combo = [];
    for(let i=0; i<str.length; i++) {
        for(let j=i+1; j<=str.length; j++) {
            combo.push(str.slice(i,j));
        }
    }
    return combo;
}
//console.log(generateCombo('dog'));


//4.
function alphabeticalSort(str) {
    return str.split("").sort().join("");
}
//console.log(alphabeticalSort("webmaster"));


//5.
function upperCase(str) {
    let tmpArr = str.split(" ");
    for (let i=0; i<tmpArr.length; i++) {
        tmpArr[i] = tmpArr[i].charAt(0).toUpperCase() + tmpArr[i].slice(1);
    }
    return tmpArr.join(" ");
}
//console.log(upperCase('the quick brown fox'));


//6.
function longestWord(str) {
    let tmpArr = str.split(" ");
    let longestLen = 0;
    let longestIndex = 0;
    for (let i=0; i<tmpArr.length; i++) {
        if (tmpArr[i].length > longestLen) {
            longestLen = tmpArr[i].length;
            longestIndex = i;
        }
    }
    return tmpArr[longestIndex];
}
//console.log(longestWord('Web Development Tutorial' ));


//7.
function countVowel(str) {
    let tmpArr = str.split("");
    let count = 0;
    // for (let i=0; i<tmpArr.length; i++) {
    //     if (['a', 'e', 'i', 'o', 'u'].indexOf(tmpArr[i].toLowerCase()) != -1) {
    //         count++;
    //     }
    // }
    tmpArr.forEach(letter => {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) != -1) {
            count++;
        }
    });
    // tmpArr.map(letter => {
    //     if (['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) != -1) {
    //         count++;
    //     }
    // });
    return count;
}
//console.log(countVowel('The quick brown fox'));


//8.
function isPrime(num) {
    if (num % 2 == 0) {
        return false;
    }
    for (let divisor = 3; divisor < num; divisor+=2) {
        console.log(divisor);
        if (num % divisor == 0) {
            return false;
        }
    }
    return true;
}
//console.log(isPrime(17));
//console.log(isPrime(18));


//9.
function typeOf(arg) {
    return typeof(arg);
}
//console.log(typeOf("str"));


//10.
function identityMatrix(n) {
    let matrix = new Array(n);
    for (let i=0; i<n; i++) {
        matrix[i] = new Array(n).fill(0);
        matrix[i][i] = 1;
    }
    return matrix;
}
//console.log(identityMatrix(3));


//11.
function sortNumber(numArray) {
    let sortedArray = numArray.sort(function(a,b) {return a-b});
    console.log(numArray[1] + ',' + numArray[numArray.length-2]);
    let returnArray = [numArray[1], numArray[numArray.length-2]];
    return returnArray;
}
//console.log(sortNumber([11,2,4,50,6]));


//12.
function isPerfect(num) {
    if (num == 0) return false;

    let divisorSum = 1;
    for (let divisor=2; divisor<=num; divisor++) {
        if (num % divisor == 0) {
            divisorSum += divisor;
        }
    }
    return num == divisorSum / 2;
}
//console.log(isPerfect(496));


//13.
function computeFactors(num) {
    let factors = [1, num];
    for (let f=2; f<num; f++) {
        if (num % f == 0 && !(f in factors)) {
            factors.push(f);
        }
    }
    return factors;
}
//console.log(computeFactors(18));


//14.
function amountToCoins(amt, coins) {
    let totalCoins = [];
    coins.sort(function(a,b) {return b-a});
    while(amt>0) {
        coins.forEach(coin => {
            while(amt-coin >= 0) {
                totalCoins.push(coin);
                amt -= coin;
            }
        });
    }
    return totalCoins;
}
//console.log(amountToCoins(46, [25, 10, 5, 2, 1]));



//15.
function computePower(b, n) {
    let value = 1;
    while(n > 0) {
        value *= b;
        n--;
    }
    return value;
}
//console.log(computePower(2, 5));


//16.
function extractUnique(str) {
    let unique = [];
    str.split("").forEach(letter => {
        if (!unique.includes(letter)) {
            unique.push(letter);
        }
    });
    return unique.join("");
}
//console.log(extractUnique("thequickbrownfoxjumpsoverthelazydog"));


//17.
function numberLetter(str) {
    let count = {};
    str.split("").forEach(letter => {
        if (letter in count) {
            count[letter] += 1;
        } else {
            count[letter] = 1;
        }
    });
    return count;
}
//console.log(numberLetter("thequickbrownfoxjumpsoverthelazydog"));


//18.
function binarySearch(arr, element) {
    let sorted = arr.concat().sort();
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        
        if (element === sorted[middleIndex]) {
            return arr.indexOf(sorted[middleIndex]);
            //return middleIndex;
        }

        if(element > sorted[middleIndex]) {
            startIndex = middleIndex + 1;
        }
        if(element < sorted[middleIndex]) {
            endIndex = middleIndex - 1;
        }
    }

    return -1;
}
//console.log(binarySearch([2,3,67,4,1,2], 4));



//19.
function largerThan(array, num) {
    let returnArr = [];
    array.forEach(n => {
        if (n > num) returnArr.push(n);
    });
    return returnArr;
}
//console.log(largerThan([4, 6, 2, 7,34], 5));



//20.
function generateRandom(len) {
    let rand = "";
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i=0; i<len; i++) {
        rand += base.charAt(Math.floor(Math.random() * base.length));
    }
    return rand;
}
//console.log(generateRandom(10));



//21.
function lengthSubset(arr, len) {
    let combo = [];
    let tempA = [];
    for (let i=0; i<arr.length-1; i++) {
        tempA = [arr[i]];
        for (let j=i+1; j<arr.length; j++) {
            tempA.push(arr[j]);
            if (tempA.length == len) {
                combo.push(tempA);
                tempA = [arr[i]];
            }
        }
    }
    return combo;
}
//console.log(lengthSubset([1, 2, 3],2));




//22.
function countLetter(str, letter) {
    let count = 0;
    str.split("").forEach(l => {
        if (l == letter) count++;
    });
    return count;
}
//console.log(countLetter('microsoft.com', 'o' ));



//23.
function notRepeat(str) {
    let repeat;
    for(let i=0; i<str.length; i++) {
        repeat = 0;
        for(let j=0; j<str.length; j++) {
            if (str[i] == str[j]) {
                repeat++;
            }
        }
        if (repeat == 1) {
            return str[i];
        }
    }
}
//console.log(notRepeat( 'abacddbec' ));




//24.
function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}




//25.
function longestCountryName(arr) {
    let longest = "";
    arr.forEach(country => {
        if(country.length > longest.length) longest = country;
    });
    return longest;
}
//console.log(longestCountryName(["Australia", "Germany", "United States of America"]));




//26.
function longestNoRepeat(str) {

}




//27.
function longestPalindrome(str) {

}



//28.
function program(callback) {
    callback();
}
function func() {
    console.log("function as parameter");
}

//program(func);




//29.
function funcName() {
    return arguments.callee.name;
}
//console.log(funcName());