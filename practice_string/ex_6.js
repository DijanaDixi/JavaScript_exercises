// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(string) {
  var index = string.indexOf("@");
  var part2 = string.slice(index); //@example.com
  var part1 = string.slice(0, index); //robin_singh
  var part1_l = [part1.length - 1] / 2;//5
  var hide=string.slice(0,part1_l)//robin
  var hide_email=hide+"..."+part2
  return hide_email

  
}
console.log(protect_email("robin_singh@example.com"));
