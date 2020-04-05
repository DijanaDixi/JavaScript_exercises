
// Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.

// Test Data:
// console.log(escape_html('PHP & MySQL'));
// "PHP &amp; MySQL"
// console.log(escape_html('3 > 2'));
// "3 &gt; 2"
function escape_html(str) {
  
    if ((str===null) || (str===''))
          return false;
    else
      str = str.toString();
     
     var map = {
       '&': '&amp;',
       '<': '&lt;',
       '>': '&gt;',
       '"': '&quot;',
       "'": '&#039;'
     };
   
     return str.replace(/[&<>"']/g, function(m) { return map[m]; });
   }
   console.log(escape_html('PHP & MySQL'));
   console.log(escape_html('3 > 2'));

//    function escape_html(str){
//     return str
//     .replace(/&/g, "&")
//     .replace(/>/g, ">")
//     };
//     console.log(escape_html('PHP & MySQL'));
//     console.log(escape_html('3 > 2'));