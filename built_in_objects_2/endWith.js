function  endWith(){
    var string="dijanah"
    return string.endsWith("a")
  }
  console.log(endWith())

  function endWith2(){
      var string="dijana"
      var letter="a"
      if(string.substr(-1)=== letter){
          return true
      }else{
          return false
      }

  }
  console.log(endWith2())
// ili skraceno
  (string.substr(-target.length) === target) ? true : false;

  if (string.substr(-target.length) === target) {
    return true;
} else {
    return false;
}