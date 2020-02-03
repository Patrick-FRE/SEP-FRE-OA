//Write a JavaScript function that returns array elements larger than a number

function isBigEnough(value) {
    return function(element) {
      return (element >= value);
    }
  }
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough(10));
  console.log(filtered);