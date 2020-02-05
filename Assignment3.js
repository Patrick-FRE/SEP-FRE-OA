//1
function reverse_number(i){
    i = i+ "";
    return i.split("").reverse().join("");
}

console.log(reverse_number(32243));

//2
function check_palindrome(str){
    var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
	if(cstr==="") {
		console.log("Empty");
		return false;
	}
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
		if (cstr.length === 1) {
			console.log("Palindrome.");
			return true;
		} else {
			ccount = (cstr.length - 1) / 2;
		}
	}
// Loop through to check the first character to the last character and then move next
	for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match 
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("Not a palindrome.");
			return false;
		}
	}
	console.log("Palindrome.");
    return true;
}
check_palindrome("madam");
check_palindrome("nurse");

//3
function substrings(str1){
    var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++) 
    {
    array1[x]=str1.substring(x, y);
    }
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent ; i++)
    {
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}
substrings("dog");
//4
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

//5
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//6
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

//7
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

//8
function test_prime(n)
{

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

console.log(test_prime(37));

//9
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));

//10
function matrix(n) {

    var i;
    var j;

    for (i=0; i < n; i++)
    {
      for (j=0; j < n; j++)
      {
           if (i === j)
           {
            
             console.log(' 1 ');
           }
                  
           else 
            {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }
matrix(4);
//11
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

//12
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(28); 

//13
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
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(17));  // [1,17]

//14
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));

//15
function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));

//16
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

//17
function Char_Counts(str1) {
  var uchars = {};
  str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
  return uchars;
  }

//18
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

//19
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }

//20
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

//21
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

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));

//22
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

//23
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
console.log(find_FirstNotRepeatedChar('abacddbec'));

//24
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

//25

