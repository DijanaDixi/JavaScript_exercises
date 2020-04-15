// Declare a global variable
var scope = "global";

function checkScope() {
   // Declare a local variable with the same name
     sccope = "local";

   // Return the local value, not the global one
   return scope;
}
console.log(checkScope()) // => "local"

console.log(sccope); //local jer je postala globalna

// Declare a global variable, even without var.
var scope = "global";
function checkScope2() {
   // Oops! We just changed the global variable.
   scope = "local";
   // This implicitly declares a new global variable.
   myScope = "local";
   return [scope, myScope]; // Return two values.
}

// console.log(checkScope2()) // ["local", "local"]: has side effects!

// console.log(scope)
console.log(myScope)




