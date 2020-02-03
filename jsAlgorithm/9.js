// Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
//!! the datatype of null in js is object
function findDataType(val){
    return typeof val;
}

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;
console.log(findDataType(person));