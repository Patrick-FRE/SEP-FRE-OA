// Q1
function myRev(num){
    var str = ""+num;
    var reStr = str.split("").reverse().join("");
    console.log(reStr)
}
// Q2
function checkPalin(str){
    var i = 0, j = str.length-1;
    while(i <= j){
        if(str.charAt(i) != str.charAt(j))
            return false;
        i++;
        j--;
    }
    return true;
}
// Q3
function allComb(str){
    var a = [];
    for(let i = 1; i <= str.length; i++)
        for(let j = 0; j <= str.length - i; j++)
            a.push(str.substring(j,j+i));
    return a;
}
//Q4
function mySort(str){
    return str.split("").sort().join("");
}
//Q5
function myToUpper(str){
    var a = str.split(" ");
    for(let i = 0; i < a.length; i++)
        a[i] = a[i].substring(0,1).toUpperCase() + a[i].slice(1);
    return a;
    // console.log(a);
    // a.forEach(element => {
    //     console.log(element.substring(0,1))
    //     element = element.substring(0,1).toUpperCase() + element;
    // });
    //return a().join(" ");
}
//Q6
function findMaxLength(str){
    var a = str.split(" ");
    var max = -1;
    var maxIndex = 0;
    for(let i = 0; i < a.length; i++)
        if(a[i].length > max)
        {
            max = a[i].length;
            maxIndex = i;
        }
    return a[maxIndex];
}
//Q7
function countVowels(str){
    var a = ['a','e','i','o','u'];
    var count = 0;
    for(let i = 0; i < str.length; i++)
        if(a.includes(str.substring(i,i+1)))
            count++;
    return count;
}
//Q8
function checkPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num%i == 0)
            return false;
    return true;
}
//Q9
function getType(arg){
    return typeof arg;
}
//Q10
function createMatrix(n){
    var matrix = []
    for(var i = 0; i < n; i++)
        matrix[i] = new Array(n);
    return matrix;
}


//Q11
function secondSome(arr){
    arr.sort();
    return arr[1] + ', ' + arr[arr.length-2];
}

//Q12
function checkPerfect(num){
    var sum = 0;
    for(let i = 1; i < num; i++)
        if(num%i == 0)
            sum += i;
    // console.log(sum);
    return (sum == num);
}
//Q13
function getFactors(num){
    var a = [];
    for(let i = 1; i < num; i++)
        if(num%i == 0)
            a.push(i);
    // console.log(sum);
    return a;
}
//Q14
function amountTocoins(num){
    var result = []
    var a = [25,10,5,2,1];
    for(let i = 0; i < a.length; i++)
    {   
        while(num >= a[i]){
            num -= a[i];
            result.push(a[i]);
        }
    }
    return result;
}
//Q15
function exponent(b,n){
    var num = 1;
    for(let i = 0; i < n; i ++)
        num *= b;
    return num;
}
//Q16
function extractUnique(str){
    var result = "";
    let s = new Set();
    for(let i = 0; i < str.length; i++)
    {   
        if(!s.has(str.charAt(i)))
        {   s.add(str.charAt(i));
            result += str.charAt(i);
        }
    }
    return result;
            
}
//Q17
function getOccrrences(str){
    let map = new Map();
    for(let i = 0; i < str.length; i++)
    {   
        if(!map.has(str.charAt(i)))
            map.set(str.charAt(i),1);
        else
            map.set(str.charAt(i),map.get(str.charAt(i))+1);
    }
    return map
}
//Q18
function binarySearch(arr,target){
    if(arr.length == 1 && target!=arr[0])
        return false;
    if(target == arr[arr.length/2])
        return true;
    else if(target < arr[arr.length/2])
        return binarySearch(arr.slice(0,arr.length/2),target);
    else
        return binarySearch(arr.slice(arr.length/2),target);
}
//Q19
function arrayLarger(arr,base){
    var result = [];
    for(let i = 0; i < arr.length; i++)
        if(arr[i] > base)
            result.push(arr[i]);
    return result;
}
//Q20
function genRandomChar(num){
    var result = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < num; i++)
    {
        let ran = Math.round(Math.random() * str.length);
        result += str.charAt(ran);
        
    }
    return result;
}
//Q21
function fixedComb(arr,num){
    let result = [];
    let oneResult = []
    // console.log(arr.slice(0));
    // console.log(arr.splice(0,1));
    helper(arr,num,oneResult,result);
    return result;
    function helper(arr,num,oneResult,result){
        // console.log(num);
        if(num == 0)
            result.push(Array.from(oneResult));
        else{
            for(let i = 0; i < arr.length; i++)
            {   
                //console.log(arr[i]);
                oneResult.push(arr[i]);
                // console.log(oneResult);
                // let nextArr = Array.from(arr);
                // nextArr.slice(i);
                helper(arr.slice(i+1),num-1,oneResult,result)
                oneResult.pop();
            }
        }
    }
}   
// function helper(arr,num,oneResult,result){
//     // console.log(num);
//     if(num == 0)
//         result.push(Array.from(oneResult));
//     else{
//         for(let i = 0; i < arr.length; i++)
//         {   
//             //console.log(arr[i]);
//             oneResult.push(arr[i]);
//             // console.log(oneResult);
//             // let nextArr = Array.from(arr);
//             // nextArr.slice(i);
//             helper(arr.slice(i+1),num-1,oneResult,result)
//             oneResult.pop();
//         }
//     }
// }
//Q22
function countOccr(str,c){
    var count = 0;
    for(let i = 0; i < str.length; i++)
        if(str.charAt(i) == c)
            count++;
    return count;
}
//Q23
function noRepeated(str){
    var s = new Set();
    var a = [];
    for(let i = 0; i < str.length; i++)
        if(a.includes(str.charAt(i)))
        {   a.splice(a.indexOf(str.charAt(i)),1)
            s.add(str.charAt(i));
        }
        else if(!s.has(str.charAt(i)))
            a.push(str.charAt(i))
        else 
            continue;
    return a[0]; 

}
//Q24
function bubbleSort(arr){
    for(let i = 0; i < arr.length-1; i++)
        for(let j = i+1; j < arr.length; j++)
            if(arr[i] < arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
    return arr;
}
//Q25
function maxString(arr){
    var max = -1;
    var maxIndex = 0;
    for(let i = 0; i < arr.length; i++)
        if(arr[i].length > max)
        {   max = arr[i].length;
            maxIndex = i;
        }
    return arr[maxIndex];
}
//Q26
function test(arr){
    var a = arr.map(function(item){
        item += 1;
    })
    return a;
}




myRev(12345);
console.log(checkPalin('Apple'));
console.log(allComb('dog'));
console.log(mySort('dsafafbc'));
console.log(myToUpper('dog is not cat'));
console.log(findMaxLength('Web Development Tutorial'));
console.log(countVowels('The quick brown fox'));
console.log(checkPrime(11));
console.log(getType(" "));
console.log(createMatrix(5));
console.log(secondSome([1,2,3,4,5]));
console.log(checkPerfect(6));
console.log(getFactors(6));
console.log(amountTocoins(46));
console.log(exponent(3,3));
console.log(extractUnique('thequickbrownfoxjumpsoverthelazydog'));
console.log(getOccrrences('Apple'));
console.log(binarySearch([1,2,4,5,7,9],4));
console.log(arrayLarger([1,5,6,8,9],3));
console.log(genRandomChar(10));
console.log(fixedComb([1,2,3],2));
console.log(noRepeated('abacddbec'));
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
console.log(maxString(["Australia", "Germany", "United States of America"]));
console.log(test([1,2,3]));