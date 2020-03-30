var res1 = "";
var res2 = "";
var res3 = "";
var res4 = "";
var res5 = "";

var first = "abcde";
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
    res1 += first[i];
  }
  for (var i = 1; i < first.length; i++) {
    for (var j = 0; j < 3; j++) {
      res2 += first[i];
    }
    for (var i = 2; i < first.length; i++) {
      for (var j = 0; j < 3; j++) {
        res3+= first[i];
      }
      for (var i = 3; i < first.length; i++) {
        for (var j = 0; j < 3; j++) {
          res4 += first[i];
        }
      for (var i = 4; i < first.length; i++) {
        for (var j = 0; j < 2; j++) {
          res5 += first[i];
        }
        
          }
          console.log(res1 +"-"+"-"+"-" );
          console.log(res2+"-"+"-"  );
          console.log("-"+res3+"-" );
          console.log("-"+"-"+res4 );
          console.log("-"+"-"+"-"+res5 );
          return "";
          }
        }
      }
    
    }
