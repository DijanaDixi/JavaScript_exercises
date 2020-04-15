// . Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,

function combo(insertString){
    var strArr = insertString.split("");
    var temp = "";
    for(var i = 0; i < strArr.length; i++){
    temp = strArr[i];
    console.log("ovo je i "+temp);
    for(var j = i + 1; j < strArr.length; j++){
    temp += strArr[j];
    console.log("ovo je j "+temp);
    }
    }
    }
    combo("dog");