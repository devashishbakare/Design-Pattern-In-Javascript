const CustomerCare = require("./CustomerCare");
function Level3() {
  this.handleRequest = function (issueType) {
    console.log("Issue has been resolved by Level 3");
  };
}

module.exports = Level3;
