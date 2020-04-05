// Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

function joinAllElements(){
    var array=['Red','Green','White','Black']
    var string=array.join("-")
    return string
}
console.log(joinAllElements())