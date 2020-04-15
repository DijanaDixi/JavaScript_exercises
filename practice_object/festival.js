// Genre
class Genre {
  constructor(name) {
    this.name = name;
  }
  getData() {
    var nameGanre = this.name;
    var formatString = nameGanre.charAt(0) + nameGanre[nameGanre.length - 1];
    return formatString.toUpperCase();
  }
}

// Movie
class Movie extends Genre {
  constructor(name, title, len) {
    super(name);
    this.title = title;
    this.len = len;
  }
  getData() {
    return this.title + " " + this.len + " " + genre.getData();
  }
}
// Program
class Program extends Movie {
  constructor(date) {
    super(date);
    this.date = function(date) {
      var myDate = new Date(date);
      var day = myDate.getDate();
      var month = myDate.getMonth();
      month++;
      var year = myDate.getFullYear();
      var result = day + "-" + month + "-" + year;
      return result;
    };

    this.listOfMovie = [];
    // this.totalNum=function(){
    //     return this.listOfMovie.length
    // }
    this.getProgramLength = function() {
      var programLength = 0;
      this.listOfMovie.forEach(function(movie) {
        programLength += movie.len;
      });
      return programLength;
    };
  }
  addMovie(movie) {
    this.listOfMovie.push(movie);
    this.totalNum = this.listOfMovie.length;
  }
  getData() {
    var printMovie = "";
    this.listOfMovie.forEach(function(Movie) {
      printMovie += "\t" + Movie.getData() + "\n";
    });
    return (
      this.date() +
      ", program duration : " +
      this.getProgramLength() +
      "min" +
      "\n" +
      printMovie
    );
  }
}

class Festival {
  constructor(name) {
    this.listOfProgram = [];
    this.numberMovieOfprogram = [];
    this.totalMovie = function() {
      var sum = 0;
      this.listOfProgram.forEach(function(Program) {
        sum += Program.totalNum;
      });
      return sum;
    };
  }
  addProgram(program) {
    this.listOfProgram.push(program);
  }
}

var genre = new Genre("comedy");
console.log(genre.name);
console.log(genre.getData());

var movie1 = new Movie(genre, "About book", 77);
console.log(movie1.getData());
var movie2 = new Movie(genre, "About sea", 89);
// console.log(movie.name);

var program = new Program("1989-04-27");
program.addMovie(movie1);
program.addMovie(movie2);
console.log(program.listOfMovie);
console.log(program.totalNum);
console.log(program.getProgramLength());
console.log(program.getData());

var festival = new Festival("festivalMovie");
festival.addProgram(program);
console.log(festival.totalMovie());
