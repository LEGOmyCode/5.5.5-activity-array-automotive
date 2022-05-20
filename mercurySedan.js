//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")



class Car extends VehicleModule.Vehicle{
    constructor(make,model,year,color,mileage){
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    //this.scheduleService = false;
    }
    start() {
        if (this.fuel > 0) {
            console.log("engine started");
            return this.started = true;
        } else {
            console.log("engine cannot start");
            return this.started = false;
        }
    }
    loadPassenger (num){
        if(this.passenger<this.maximumPassengers){
            if((num+this.passenger) <= this.maximumPassengers){
                this.passenger+=num;
                return this.passenger;
            }
            else{
                console.log("full");
            }
        }
        else{
            console.log("full");
        }
    }
    scheduleService(mileage){
        if(super.mileage>30000){
            console.log("Time For Maintenance")
            return true;
        }
        else{
            return false;
        }
    }
}
let myCar = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "33000");
console.log(myCar.make);
console.log(myCar);
let otherCar = new Car("Mecury", "Sedan", "1965", "color");
console.log(otherCar);
console.log(otherCar.start());
console.log(otherCar.loadPassenger(2));
//I don't understand this part it says to define as a property and a method using the same name scheduleService
//having the same name causes issues
console.log(otherCar.scheduleService('5000'));