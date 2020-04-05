function longest_common_starting_substring(arr1){
    var arr= arr1.concat().sort(), 
    a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
    while(i< L && a1.charAt(i)=== a2.charAt(i))
     i++;
    return a1.substring(0, i);
    }
    
    console.log(longest_common_starting_substring(['go', 'google'])); 
    
    console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 

    function commonSubstring(arr) {

        let newStr = "";
    
        const str1 = arr[0];
        const str2 = arr[1];
    
        for (let i = 0; i < str1.length; i++) {
            while (str1[i] === str2[i]) {
                newStr += str1[i];
                break;
            }
        }
    
        return newStr;
    
    }
    
    console.log(commonSubstring(['go', 'google'])); // go
    console.log(commonSubstring(['goog', 'google'])); // goog
    console.log(commonSubstring(['SQLInjection', 'SQLTutorial'])); // SQL
    console.log(commonSubstring(['abcd', '1234']));
    
    console.log(longest_common_starting_substring(['abcd', '1234']));

    function longest_common_starting_substring(arr) {
        for (var i = 0; i < arr[0].length; i++) {
            if (arr[0][i] !== arr[1][i]) {
                return arr[0].slice(0, i);
            }
        }
        return arr[0];
    }
    console.log(longest_common_starting_substring(['goog', 'google']))