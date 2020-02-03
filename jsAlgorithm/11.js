//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
function Second_Greatest_Lowest(arr_num)
{
    arr_num.sort(function(x,y)
           {
           return x-y;
           });
var result=[];

    result.push(arr_num[1],arr_num[arr_num.length-2]);
    return  result.join(',');
        }
console.log(Second_Greatest_Lowest([1,2,3,4,5]));