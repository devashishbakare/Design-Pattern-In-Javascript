function WaiterExecuter() {
  this.execute = function (order) {
    order.execute();
  };
}

module.exports = WaiterExecuter;
