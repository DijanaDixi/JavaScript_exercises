// Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"

function hideEmail(){
    var string="somerandomaddress@example.com"
    var newString=string.split("@")[0].slice(0,4)+"..."+"@"+string.split("@")[1]
    return newString
}
console.log(hideEmail())