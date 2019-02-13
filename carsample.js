// function Car(make,model){
//   this.make = make;
//   this.model = model;
// }
// Car.prototype.updateModel = function(newModel){
//   this.model = newModel;
// }
// let myCar = new Car('Chevy','Silvarado');
// console.log(myCar);

class Car{
  // if you want to use the word this inside of a class
  // you must call the constructor function
  // in python it's __init__()
  constructor(make, model, mpg, tankSize){
    this.make = make;
    this.model = model;
    this.mpg = mpg;
    this.tankSize = tankSize
  }
  // instead of having to do prototype, just put the method
  // in the class
  updateModel(newModel){
    this.model = newModel
  }
  distanceToEmpty(){
    console.log(this.mpg * this.tankSize + " miles left!");
  }
  turnOn(){
    console.log("Car is on!");
  }
}
let gregsCar = new Car('Toyota','Camry',36,15);
gregsCar.distanceToEmpty();

class ElectricCar extends Car{
  constructor(make,model,batteryLife){
    super(make,model);
    this.batteryLife = batteryLife;
  }
  distanceToEmpty(){
    console.log(this.batteryLife * 10);
  }
}
