// Write a function to input temperature in 
// Centigrade and convert to Fahrenheit.

function convertToF(celsius) {
    var fahrenheit;

    fahrenheit = (celsius * (9/5)) + 32; 

    return fahrenheit;
  }
  

  console.log(convertToF(30));