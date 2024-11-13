function CoffeeDecorator(coffee) {
  this.coffee = coffee;

  this.getDescription = function () {
    return this.coffee.getDescription();
  };
  this.getCost = function () {
    return this.coffee.getDescription();
  };
}

module.exports = CoffeeDecorator;
