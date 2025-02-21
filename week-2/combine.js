class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isRunning = false;
    }
  
    start() {
      this.isRunning = true;
      console.log(`${this.make} ${this.model} started.`);
    }
  
    stop() {
      this.isRunning = false;
      console.log(`${this.make} ${this.model} stopped.`);
    }
  }
  
  const myCar = new Car('Honda', 'Civic', 2022);
  myCar.start(); 
  myCar.stop();  
  
  let anotherCar = myCar; 
  anotherCar.start(); 
  