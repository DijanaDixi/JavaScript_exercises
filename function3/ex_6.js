function repeat(n,string) {
 

  var newArray = [];

  for (var i = 0; i < n; i++) {
    if(typeof string==='undefined'){
        newArray[i]=(null)
  }  else{
      newArray[i]=string
  }
}
  return newArray
}
console.log(repeat(2,0))