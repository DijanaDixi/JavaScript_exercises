// 12. Write a JavaScript function to uncamelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

function uncamelize(string) {
    var index=0
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
     index=i
    }
  }
  return string.slice(0,index)+"-"+string.charAt(index).toLowerCase()+string.slice(index+1)
}





function uncamelize(str, sep){
    let newStr = str.split("");
    if(!sep){sep = " ";}
    let i;
    for(i = 0; i < newStr.length;i++){
    if(newStr[i] == newStr[i].toUpperCase()){
    newStr[i] = sep+newStr[i].toLowerCase();
    }
    }
    return newStr.join("");
    }
    console.log(uncamelize("helloWorld","!"));

    function uncamelize(str, n) {
        var res = str.replace(/[A-Z]/g, n + 'w');
        if(typeof n === 'undefined') {
        return str.replace(/[A-Z]/g, ' ' + 'w')
        }
        return res;
        
        };
        
        console.log(uncamelize('helloWorld'));