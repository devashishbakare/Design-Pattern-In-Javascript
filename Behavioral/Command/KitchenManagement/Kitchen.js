function Kitchen() {
  this.prepareDish = function (dish) {
    console.log("Preparing dish", dish);
  };
  this.cancelDish = function () {
    console.log("Canceling dish");
  };
}

module.exports = Kitchen;
