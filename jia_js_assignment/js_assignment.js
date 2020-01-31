//Jia

//1.
function reverseNumber(num) {
    let n = num.toString();
    return Number(n.split("").reverse().join(""));
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

}


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
    coins.sort(function(a,b) {return b-a});
}

