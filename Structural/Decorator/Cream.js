const CoffeeDecorator = require("./Decorator");

function Cream(coffee) {
  // we are binding the current this to the CoffeeDecorator function
  // hence we are able to access this.coffee.getDescription() + this.coffee.getCost()
  CoffeeDecorator.call(this, coffee);

  this.getDescription = function () {
    return this.coffee.getDescription() + " cream ";
  };
  this.getCost = function () {
    return this.coffee.getCost() + 5;
  };
}

module.exports = Cream;
