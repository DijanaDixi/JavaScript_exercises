// class DateUp {
//   constructor(date) {
//     this.date = date;
//   }
//   getDate() {
//     let time = this.date.getTime();
//     setInterval(() => {
//       console.log(new Date(time).toTimeString().slice(0, 8));
//       time += 1000;
//     }, 1000);
//   }
// }

// var clock = new DateUp(new Date());
// clock.getDate();


var test = setInterval(timer, 1000);

function timer() {
var d = new Date();
console.log(d.toLocaleTimeString()) 
}