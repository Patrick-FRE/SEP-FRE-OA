//1
let reverseNum = num => {
    let numArr = num.toString().split('');
    let revStr = numArr.reverse().join('');
    return Number(revStr);
  }
  //console.log(reverseNum(32243) === 34223)
  
  //2
  let isParlindrome = str => str === str.split('').reverse().join('');
  //console.log(isParlindrome('madam') === true);
  //console.log(isParlindrome('nurses') === false);
  
  //3
  let genSubstr = (str) => {
      let subStrArr = [];
      let subStr = ''
      for(let i = 0; i < str.length; i++) {
         subStrArr.push(str[i]);
          for(let j = i+1; j < str.length; j++) {
             subStrArr.push(str.slice(i, j+1))
          }
      }
      return subStrArr
  }
  //console.log(genSubstr('dog'))
  
  
  //4
  let sortLetters = wordStr => wordStr.toLowerCase().split('').sort().join('');
  //console.log(sortLetters('webmaster') === 'abeemrstw');
  
  //5
  let toCapitalize = str => {
      let wordsArr = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1));
      return wordsArr.join(' ');
  }
  //console.log(toCapitalize('the quick brown fox') === 'The Quick Brown Fox');
  
  //6
  let longestWord = str => {
      return str.split(' ').sort((a, b) => b.length - a.length)[0]
  }
  //console.log(longestWord('Web Development Tutorial') === 'Development')
  
  //7
  let countVowels = str => {
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      let arr = str.split('');
      let filteredVow = arr.filter(ch => vowels.includes(ch));
      return filteredVow.length;
  }
  //console.log(countVowels('The quick brown fox') === 5)
  
  //8
  let isPrime = n=> {
    if (n === 2) {return true}
    if (typeof n !== 'number' || n <= 1 || n % 1 !== 0 || n % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i++, i++) {  //i++, i++, to skip all even nums.
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  //console.log(isPrime(6));
  //console.log(isPrime(11))
  
  //9
  let returnDataType = arg => typeof arg;
  //console.log(returnDataType(function(){}))
  
  //10
  let createMatrix = n => {
      let arr = [];
      let matrix =[];
      while(n > 0) {
          arr.push(1);
          matrix.push(arr);
          n--;
      }
      return matrix;
  }
  
  //console.log(JSON.stringify(createMatrix(3)) === '[[1,1,1],[1,1,1],[1,1,1]]')
  
  
  //11
  let findSecLowAndSecHigh = arr => {
      let sortedArr = arr.sort((a, b) => a - b);
      let output = [];
      output.push(sortedArr[1]);
      output.push(sortedArr[sortedArr.length - 2]);
      console.log(output)
      return output;
  }
  
  //console.log(JSON.stringify(findSecLowAndSecHigh([7, 2, 3, 4, 5])) === '[3,5]')
  //12
  let isPerfect = num => {
   let sum = 0;
   for(let i = 0; i < num; i++){
       if(num % i === 0) {
           sum += i;
       }
   }
   return sum === num;
  }
  //console.log('hi',isPerfect(8128));
  //console.log('hi',isPerfect(7));
  
  //13
  let findFactors = num => {
      let factors = [1];
      for(let i = 2; i <= num; i++) {
          if(num % i === 0){
              factors.push(i);
          }
      }
      return factors;
  }
  //console.log(findFactors(12));
  
  //14
  let amountTocoins = (amount, coins) => {
      if(amount === 0) {return []}
  
      let highest = coins[0] 
  
      if(amount >= highest) {
        let remaining = amount - highest;
        return [...[highest], ...amountTocoins(remaining, coins)]
      } else {
        coins.shift();
        return amountTocoins(amount, coins);
      }
  }
  //console.log(amountTocoins(46, [25, 10, 5, 2,1]));
  
  //15 
  let getBN = (b, n) => Math.pow(b, n)
  //console.log(getBN(2, 3))
  
  //16
  let getUniqueCh = str => [...new Set(str)].join('')
  
  //console.log(getUniqueCh("aabdeff"))
  //17 
  let getOcurrance = str => {
      let hashTable = {}
      for(let ch of str) {
          if(!hashTable[ch]){
              hashTable[ch] = 1;
          } else {
              hashTable[ch]++
          }
      }
      return Object.values(hashTable);
  }
  
  //onsole.log(getOcurrance('aabcca'))
  
  //18 
  let binarySearch = (arr, target) => {
      let low = 0;
      let high = arr.length -1;
  
      while(low <= high) {
          let mid = Math.floor((high + low) / 2);
          if(arr[mid] === target) {
              return mid;
          }
          if(arr[mid] > target){
              high = mid - 1;
          }
          if(arr[mid] < target) {
              low = mid + 1;
          }
      }
  }
  //console.log(binarySearch([1,2,3,4,5,6,7], 2))
  
  //19
  let largerThanN = (arr, n) => arr.filter(num => num > n);
  //console.log(largerThanN([4,5,4,1,3,7], 3));
  
  //20 
  let genRandomStrWLen = (len) => {
      let str = ''
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      while(len > 0) {
          str += characters.charAt(Math.floor((Math.random()* characters.length)))
          len--
      }
      return str;
  }
  //console.log(genRandomStrWLen(7))
  //21
  let genSubsetWLength = (arr, n) => {
  }
  console.log(genSubsetWLength( [1, 2, 3]), 2);
  
  //22
  let countOccurance = (str, target) => {
    let count = 0;
    for (let ch of str) {
        count += ch === target
    }
    return count;
  }
  //console.log(countOccurance( 'microsoft.com', 'o' ) === 3)
  
  //23
  let nonRepeatedChar = str => {
      let hashTable = {}
      for (let ch of str) {
          if(!hashTable[ch]){
              hashTable[ch] = 1;
          } else {
              hashTable[ch]++
          }
      }
      for (let ch of str) {
          if(hashTable[ch] === 1) {
              return ch;
          }
      }
  }
  //console.log(nonRepeatedChar( 'abacddbec' ) === 'e')
  
  //24 
  let bubbleSort = arr => {
      let swapped = true;
      let len = arr.length;
      while(swapped === true) {
          swapped = false;
          for (let i = 0; i < len; i++) {
              if(arr[i] < arr[i + 1]) {
                  swapped = true;
                  swap(i, i + 1, arr);
              }
          }
          len--;
      }
      return arr;
  }
  
  let swap = (first, second, arr) =>{
      let temp = arr[first];
      arr[first] = arr[second];
      arr[second] = temp;
  }
  
  //console.log(bubbleSort( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
  
  
  
  //25
  let findLongestCountry = arr => {
      let longestCountry = ''
      for (let country of arr) {
          if(country.length > longestCountry.length){
              longestCountry = country;
          }
      }
      return longestCountry;
  }
  //console.log(findLongestCountry(["Australia", "Germany", "United States of America"]) === "United States of America")
    
  
  //26 
  let longestSubStr = str => {
      //better way
  }
  //27 
  let longestParlindrome = str => {
      let longestPar = '';
      for(let i = 0; i < str.length; i++) {
          let evenPar = expandLandR(i, i+1, str);
          let oddPar = expandLandR(i, i+2, str);
         
          if(evenPar.length > longestPar.length) {
              longestPar = evenPar;
          }
          if(oddPar.length > longestPar.length) {
              longestPar = oddPar;
          }
      }   
      return longestPar;
  }
  let expandLandR = (left, right, str) => {
      while(left >= 0 && right <= str.length -1 && str[left] === str[right]) {
          left--;
          right++;
      }
      return str.slice(left + 1, right);
  }
  
  //console.log(longestParlindrome(("bananas")) === "anana") ;
  //console.log(longestParlindrome('caddafa') === 'adda')
  
  //28
  let acceptFunc = func => console.log(func)
  //console.log(acceptFunc(()=> console.log('hello, world')));
  
  //29
  let getFuncName = func => func.name || undefined;
  //console.log(getFuncName(function foo(){}));
  //console.log(getFuncName(() => {}));
  
  