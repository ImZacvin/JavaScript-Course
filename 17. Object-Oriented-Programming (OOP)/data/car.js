class Car {
  #brand;
  #model;
  speed;
  trunk;

  constructor(details) {
    this.#brand = details.brand;
    this.#model = details.model;
    this.speed = 0; // Default speed
    this.trunk = false;
  }
  

  displayInfo() {
    console.log(`Brand: ${this.#brand}, Model: ${this.#model}, Speed: ${this.speed} km/h`);
  } 

  go() {
    if (this.trunk) {
      console.log("Cannot accelerate, trunk is open!");
      return;
    }
    if ((this.speed + 5 < 200)) {
      this.speed += 5;
    }
  }

  brake() {
    if ((this.speed - 5 >= 0)) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      console.log("Trunk is now open.");
      this.trunk = true;
      return;
    }

    console.log("Cannot open trunk while the car is moving!");
  }

  closeTrunk() {
    this.trunk = false;
  }

}

const car = [{ brand: 'Toyota', model: 'Corolla' },
{ brand: 'Tesla', model: 'Model 3' }].map((details) => {
  return new Car(details);
});

class RaceCar extends Car {
  acceleration;
  
  constructor(details) {
    super(details);
    this.acceleration = details.acceleration;
  }

  go() {
    if(this.speed + this.acceleration > 300) {
      return;
    }

    this.speed += this.acceleration;
  }

  openTrunk() {
    console.log('Race cars do not have trunks!');
  }

  closeTrunk() {
    console.log('Race cars do not have trunks!');
  }
}

car.forEach((cars) => cars.displayInfo());

car[0].go();
car[0].go();
car[0].brake();
car[0].brake();

car[0].openTrunk();
car[0].go();

car[0].closeTrunk();

car[0].go();
car[0].displayInfo();

const raceCars = [new RaceCar({ brand: 'McLaren', model: 'F1', acceleration: 20 })];

raceCars.forEach((raceCar) => {
    raceCar.displayInfo();
});

raceCars[0].go();
raceCars[0].go();
raceCars[0].brake();
raceCars[0].brake();

raceCars[0].openTrunk();
raceCars[0].go();

raceCars[0].closeTrunk();

raceCars[0].go();
raceCars[0].displayInfo();