// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

function email(){
    var emailAddress="myemailaddress@bgit.rs"
    var index=emailAddress.indexOf("@")
    var monkey=emailAddress.slice(index)//@bgit.rs
    var firstPart=emailAddress.slice(0,index)//myemailaddress
    var indexHalf=firstPart.length/2 //index 7
    var first=firstPart.slice(0,indexHalf)//myemail
   
    return first+'...'+monkey
}
console.log(email())