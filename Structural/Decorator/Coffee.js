function Coffee() {
  this.getDescription = function () {
    return "base coffee";
  };
  this.getCost = function () {
    return 100;
  };
}

module.exports = Coffee;
