// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function counte() {
  var string = "The quick brown foxo";
  var vowel = "aiueo";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowel.length; j++) {
      if (string[i] === vowel[j]) {
        count++;
      }
    }
  }
  return count
}
console.log(counte())


function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)//ako se nalazi u stringu
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));