function computer(builder) {
  this.ram = builder.ram;
  this.processor = builder.processor;
  this.graphicsCard = builder.graphicsCard;
  this.storageSize = builder.storageSize;
}

function computerBuilder(ram, processor) {
  this.ram = ram;
  this.processor = processor;

  this.graphicsCard = false;
  this.storageSize = 256;

  this.setGraphicsCard = function (hasGraphicsCard) {
    this.graphicsCard = hasGraphicsCard;
    return this;
  };

  this.setStorageSize = function (storage) {
    this.storageSize = storage;
    return this;
  };

  this.build = function () {
    return new computer(this);
  };
}

const baseComputer = new computerBuilder(16, "intel i7").build();
console.log(baseComputer);

const customizedComputer = new computerBuilder(16, "macbook m2")
  .setGraphicsCard(true)
  .setStorageSize(1024)
  .build();
console.log(customizedComputer);
