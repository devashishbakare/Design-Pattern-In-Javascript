function CustomerCare() {
  this.nextHandler = null;
  this.setNextHandler = function (nextHandler) {
    this.nextHandler = nextHandler;
    return nextHandler;
  };

  this.handleRequest = function (issueType) {
    if (this.handleRequest != null) {
      this.nextHandler.handleRequest(issueType);
    } else {
      console.log("No Handler found");
    }
  };
}

module.exports = CustomerCare;
