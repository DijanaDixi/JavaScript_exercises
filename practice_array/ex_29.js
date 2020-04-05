function num_string_range(letter1,letter2,interval) {
    var result = [];
    var str = 'abcdefghijklmnopqrstuvwxyz';
    
    str = str.split('')
    for (var i = 0; i < str.length; i += interval) {
    result.push(str[i]);
    }
    return result;
    }
    
    console.log(num_string_range('a', "z", 2));
    ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
    
    console.log(num_string_range('a', "z", 3));
    ["a", "d", "g", "j", "m", "p", "s", "v", "y"]