

function remove_non_word(str){
    return str.replace(/[^A-Z a-z -]/g, '')
    };
    console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));//PHP - MySQL