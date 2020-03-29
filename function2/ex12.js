// Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function retired(yearOfBrithdey) {
  var curentYear = new Date().getFullYear();
  var brithday = new Date(yearOfBrithdey).getFullYear();
  var years = curentYear - brithday;
  var man = 65;
  var women = 60;
  var howMan=years-man
  var howWomen=years-women
  if (years <=60) {
    return "zena treba"+ `${howWomen}`+ "muskarcu"+`${howMan}`
  } else if (years>60 && years<=65) {
    return "yeni je u penziji"+ "muskarcu treba"+`${howMan}`
  } else if(years>65){
      return "u penziji su"
  }
    
  
}

console.log(retired("26 sep 1964"));
