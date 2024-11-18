const CustomerCare = require("./CustomerCare");
function Level2() {
  CustomerCare.call(this);
  this.handleRequest = function (issueType) {
    if (issueType == "advance") {
      console.log("Issue has been resolve by level 2 support!");
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(issueType);
    } else {
      console.log("No handler found");
    }
  };
}

module.exports = Level2;
