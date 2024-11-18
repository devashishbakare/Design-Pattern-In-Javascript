const CustomerCare = require("./CustomerCare");
function Level1() {
  CustomerCare.call(this);
  this.handleRequest = function (issueType) {
    if (issueType == "basic") {
      console.log("Issue has been resolve by level 1 support!");
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(issueType);
    } else {
      console.log("No handler found");
    }
  };
}

module.exports = Level1;
