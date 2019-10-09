const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`pls input           :`, (input) => {
  console.log('this is the input  :',input);
  //1. reverse
  /* var out=Number(input.split("").reverse().join(""));
  console.log(out); */
  //

  //2.palindrome
  /* var out=input.split("").reverse().join("");
  console.log(out===input); */
  //

  //3.generate all subs
  /* var out=[];
  for(let i=0; i<input.length+1;i++){
    for (let j=i+1; j<input.length+1;j++){
      out.push(input.slice(i,j))
    }
  } */
  //

  //4.alphabetical order
/*   var out=input.split("").sort().join(""); */
  //

  //5.uppercase convertion

  /* var tempout=input.split("")[0].toUpperCase();
  var out=input.split("");
  out[0]=tempout;
  out=out.join(""); */
  //

  //6 longest word
  /* var temp=input.split(" ");
  var length=0;
  for(let i=0; i<temp.length;i++){
    if (temp[i].length>length){
      length=temp[i].length;
      out=temp[i];
    }
  } */

  //7
  /* var dict={
    a:1,
    e:1,
    i:1,
    o:1,
    u:1,


  }
  var i=0;
  var temp=input.split("");
  temp.forEach((items)=>{if(items in dict){i += 1}});
  out=i; */
  //

  //8
  /* function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  out=isPrime(input); */
  //

  //9
  /* out= (typeof input); */

  //10
  /* input=Number(input);
  out=[];
  temp=[];
  n=input;
  for(let i=0; i<n; i++){
    for(let j=0;j<n;j++){
      temp.push(i+j);
    }
    out.push(temp);
    temp=[]
  }
 */

 //11
 /* input=input.split(',');
 if (input.length<2){
   out ='please enter array with more than 2 numbers';
 }else{
  var out=undefined;
  function secondMax(arr){
   var maxNum=Math.max.apply(null,arr);
   arr=arr.splice(arr.indexOf(maxNum),1);
   return Math.max.apply(null,arr);
  }
  function secondMin(arr){
   var minNum=Math.min.apply(null,arr);
   arr=arr.splice(arr.indexOf(minNum),1);
   return Math.min.apply(null,arr);
  }
  const a=secondMax(input);
  const b=secondMin(input);
  out = [a,b];
 } */

 //12
  /* input=Number(input);
  temp=[];
  for(let i=1; i<=Math.sqrt(input);i++){
    if(input% i===0){
      temp.push(i);
      temp.push(input/i);
    }
  }
  console.log(temp);
  sumup=0;
  for(let i=0;i<temp.length;i++){
    sumup += temp[i]
  }
  if(sumup===input*2){
    out=true
  }else{
    out=false
  } */

  //13

  /* temp=[];
  for(let i=1; i<=Math.sqrt(input);i++){
    if(input% i===0){
      temp.push(i);
      temp.push(input/i);
    }
  }
  out=temp;
 */

 //14
 //assume input array is reverse sorted array
/*  input=Number(input);//input is a number, coin array is declare in the function
 arr=[25, 10, 5, 2, 1];
 tempNum=0;
 temp=[];
 out=[];
 arr.forEach(element => {
   while(tempNum<input){
    if(tempNum + element<input){
      tempNum += element;
      out.push(element);
    }else{
      break
    }
   }
   if(tempNum+element===input){
    out.push(element)
   }
 });
  */


  //15
 /*  var input=input.split("");
  var b=Number(input[0]);
  var n=Number(input[1]);
  out=1;
  for(let i=n; i>0;i--){
    out=out*b;
  } */

  //16
  //dont understand

  //17
  /* var dict={};
  input=input.split("");
  console.log(input);
  input.forEach(element => {
    if(element in dict){
      dict[element]=Number(dict[element])+1;
    }else{
      dict[element]=1;
    }
  });
  out=dict; */

  //18
  //assume input is an array 20, 120, 111, 215, 54, 78
/*   var left=0;
  var target=54;
  input=input.split(",");
  var right=input.length-1;
  input.forEach(element => {element=Number(element);
    
  });
  console.log(right);
  console.log(input);
  input=input.sort();
  console.log(input)
  while(left<right){
    var mid=Math.ceil((left+right)/2);
    if (input[mid]<target){
      left=mid;
    }else if(input[mid]>target){
      right=mid;
    }else{
      break;
    }
  }
  out=input[mid]; */

  //19
  //assume input is array 20, 120, 111, 215, 54, 78 and target is 50
  /* input=input.split(",");
  var target=50;
  input=input.filter((x)=>{return x>target});
  out=input; */

  //20
  out=[];
  len=Number(input);
  for(let i=0; i<len;i++){
    out.push(Math.floor(Math.random()*10))
  }
  out=out.join("");

  //21
  //assume sub array length less than array length
  //dfs

  //23
/*   var dict={};
  var out=[];
  //assume the input is string 'abacddbec'
  input=input.split("");
  input.forEach(element => {
    if(element in dict){
      dict[element]+=1
    }else{
      dict[element]=1;
    }
  });
  input.forEach(element=>{
    if(dict[element]===1){
      out.push(input.indexOf(element));
    }
  })
  out=input[out[0]]; */



  console.log(out);
  readline.close()
})