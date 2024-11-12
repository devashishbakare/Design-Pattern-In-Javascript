function HondaHatchback() {
  this.assemble = function () {
    console.log("Assembling a Honda Hatchback");
  };
}

function HondaSedan() {
  this.assemble = function () {
    console.log("Assembling a Honda Sedan");
  };
}

function TataHatchback() {
  this.assemble = function () {
    console.log("Assembling a Tata Hatchback");
  };
}

function TataSedan() {
  this.assemble = function () {
    console.log("Assembling a Tata Sedan");
  };
}

function HondaFactory() {
  this.createHatchback = function () {
    return new HondaHatchback();
  };

  this.createSedan = function () {
    return new HondaSedan();
  };
}

function TataFactory() {
  this.createHatchback = function () {
    return new TataHatchback();
  };

  this.createSedan = function () {
    return new TataSedan();
  };
}

function CarShowroom(factory) {
  this.hatchback = factory.createHatchback();
  this.sedan = factory.createSedan();

  this.displayCars = function () {
    this.hatchback.assemble();
    this.sedan.assemble();
  };
}

function main() {
  const factory = Math.random() > 0.5 ? new HondaFactory() : new TataFactory();
  const showroom = new CarShowroom(factory);
  showroom.displayCars();
}

main();
