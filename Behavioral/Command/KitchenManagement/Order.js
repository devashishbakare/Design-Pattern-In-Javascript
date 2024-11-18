function Order(kitchen, dish) {
  this.dish = dish;
  this.kitchen = kitchen;
  this.execute = function () {
    this.kitchen.prepareDish(this.dish);
  };
}
module.exports = Order;
