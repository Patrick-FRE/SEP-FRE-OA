//Write a JavaScript function that generates a string id (specified length) of random characters

function genRanChar(lenth){
    var txt="";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0;i<lenth;i++){
        txt += char_list.charAt(Math.floor(Math.random()*char_list.length));
    }
    return txt;
}

console.log(genRanChar(7));