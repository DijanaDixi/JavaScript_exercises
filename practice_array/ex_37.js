function string_filled(st,num) {
    var string=""
    for (var i = 0; i < num; i++) {
     string+=st
    }
    return string
  }
  console.log(string_filled("bla",3));