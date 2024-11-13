const CoffeeDecorator = require("./Decorator");

function Milk(coffee) {
  // we are binding the current this to the CoffeeDecorator function
  // hence we are able to access this.coffee.getDescription() + this.coffee.getCost()
  CoffeeDecorator.call(this, coffee);

  this.getDescription = function () {
    return this.coffee.getDescription() + " milk ";
  };
  this.getCost = function () {
    return this.coffee.getCost() + 10;
  };
}

module.exports = Milk;
