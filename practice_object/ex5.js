// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height=height;
  }
  get volume(){
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4)
    // return Math.PI * Math.pow(this.rad, 2) * this.h;

  }
}
const c1=new Cylinder(5,10)
console.log(c1.volume)