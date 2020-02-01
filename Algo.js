function myReverse(s){
    return s.split("").reverse().join("");
}
console.log(myReverse("32243"));

function isPalindrome(s){
    var l=0,r=s.length-1;
    while(l<r){
        if (s[l]!=s[r]){
            return false;
        }
        l++,r--;
    }
    return true;
}
console.log(isPalindrome("32223"));

function allCombination(s){
    var res = [];
    for(l=0;l<s.length;l++){
        r=l+1;
        for(r;r<=s.length;r++){
            res.push(s.substring(l,r));
        }
    }
    return res;
}
console.log(allCombination("dog"));

function alphabOrder(s){
    return s.split("").sort().join("");
}
console.log(alphabOrder("webmaster"));

function upperCase(s){
    return s.split(" ").map(x=>x.substring(0,1).toUpperCase().concat(x.substring(1,x.length))).join(" ");
}
console.log(upperCase('the quick brown fox'));

function longest(s){
    res = "";
    s.split(" ").forEach(element => {
        if(element.length>res.length){res = element;}
    });
    return res
}
console.log(longest('Web Development Tutorial'));

function countVowels(s){
    const vowels = new Set(["a","o","e","u","i"]);
    res = 0;
    s.split("").forEach(c=>{
        if(vowels.has(c)){res++;}
    })
    return res;
}
console.log(countVowels("The quick brown fox"));

function isPrime(){
    if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

function myTypeof(obj){
    return typeof(obj);
}
console.log(myTypeof(123));

function matrix(n){
    var i;
    var j;
    var x = new Array(n);
    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(n);
    }
    for (i=0; i < n; i++){
        for (j=0; j < n; j++) {
           if (i === j){x[i][j]=1;}       
           else {x[i][j]=0;}
        }
    }
    return x;
}
console.log(matrix(5));

function secLow(arr){
    arr.sort();
    return [arr[1],arr[arr.length-2]];
}
console.log(secLow([1,2,3,4,5]));

function perfect(number){
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
     if(temp === number && temp !== 0)return true;
     else return false;
}
console.log(perfect(28));

function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
}
console.log(factors(10));

function amountToCoins(amount,coins){
    if(amount===0){
        return [];
    }
    else if(amount>0){
        for (var i=0;i<coins.length;i++){
            var res=amountToCoins(amount-coins[i],coins);
            if(res!==null){
                return res.concat([coins[i]]);
            }
        }    
    }
    return null;
}
console.log(amountToCoins(46,[25, 10, 5, 2, 1]));

function unique(s){
    record = []
    s.split("").forEach(c=>{
        if(!record.includes(c)){
            record.push(c);
        }
    })
    return record.join("");
}
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));

function counter(s){
    var counter = {};
    s.split("").forEach(c=>{
        if(counter[c]!==undefined){
            counter[c]++;
        }else{
            counter[c]=1;
        }
    })
    return counter;
}
console.log(counter("aabbccaa"));

function biSearch(arr,t){
    var help = function(arr,t,l,r){
        mid = Math.floor((l + r)/2);
        if(l>r) return false;
        else if(arr[mid]>t){return help(arr,t,l,mid-1);}
        else if(arr[mid]<t){return help(arr,t,mid+1,r);}
        else return true;
    }
    return help(arr,t,0,arr.length-1);
}
console.log(biSearch([1,3,5,10],2));

function myFiler(arr,t){
    return arr.filter(x=>x>t);
}
console.log(myFiler([1,4,6,8],4));

function IDGenerator(len){
    var li = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var liLen = li.length;
    var index;
    var id=""
    for(var i=0;i<len;i++){
        index = Math.floor(Math.random() * (liLen) );
        id=id.concat(li.charAt(index));
    }
    return id;
}
console.log(IDGenerator(8));

/*
let array=[1,2,3];
array.forEachPa = function(func)
{
    this.forEach(e=>{
        func(e);
    });
};
array.forEachPa(e=>{
    console.log(e);
})

let str="abc";
Array.prototype.patrickMap=function(callBack){
    var res = []
    for(let i=0;i<this.length;i++){
        res.push(callBack(this[i]));
    }
    return res
}
let newArray=array.patrickMap(e=>{
    return ""+e+"patrick";
})
console.log(newArray);



*/

function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length == arra_size)
       {
          result_set.push(result);
        }
    }
    return result_set; 
}
console.log(subset([1, 2, 3], 2));

function countLetter(string,letter){
    var res = 0
    string.split("").forEach(e=>{
        if(letter===e) res++;
    })
    return res;
}
console.log(countLetter("microsoft.com", "o"));

function firstNotRepeat(str){
    let dic={};
    for(var s of str){
        if (!(s in dic)){dic[s]=1}
        else{dic[s]+=1};
    }
    //console.log(dic)
    for(let s of str){
        if(dic[s]==1){
            return s
        }
    }
    return null;
}
console.log(firstNotRepeat("abacddbec"));

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
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

function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

function NonRepeatLongest(names)
{
    string="";
    ss="";
    namestring=names.split("");
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
console.log(NonRepeatLongest("google.com"));

function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
    }
    
    function longest_palindrome(str1){
    
    var max_length = 0,
    maxp = '';
    
    for(var i=0; i < str1.length; i++) 
    {
    var subs = str1.substr(i, str1.length);
    
    for(var j=subs.length; j>=0; j--) 
    {
    var sub_subs_str = subs.substr(0, j);
    if (sub_subs_str.length <= 1)
    continue;
    
    if (is_Palindrome(sub_subs_str))
    {
    if (sub_subs_str.length > max_length) 
    {
    max_length = sub_subs_str.length;
    maxp = sub_subs_str;
    }
    }
    }
    }
    
    return maxp;
}
console.log(longest_palindrome("abracadabra"));

function passFunc(callback){
    callback();
}
function print(){
    console.log(this)
}
passFunc(print);

console.log(print.name)