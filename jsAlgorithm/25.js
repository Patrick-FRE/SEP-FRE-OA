//Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
function LongestNameOfCountry(country_name){
    var count=[];
    for(var i=0;i<country_name.length;i++){
        count.push(country_name[i].length);
    }
    var max=Math.max(...count);//why spread operator in here
    var index=count.indexOf(max);
    return country_name[index];
    //return max;
};

a=LongestNameOfCountry(["China","US","Japan"]);
console.log(a);