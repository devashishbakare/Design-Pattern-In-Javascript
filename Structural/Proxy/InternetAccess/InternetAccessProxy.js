const RealInternetAcess = require("./RealInternetAccess");
function InternetAccessProxy(employeeName) {
  this.employeeName = employeeName;
  this.db = ["john doe"];
  const checkAccess = (employeeName) => {
    let flag = false;
    this.db.forEach((name) => {
      //console.log(name, employeeName);
      if (name == employeeName) flag = true;
    });
    return flag;
  };

  this.grantAccess = function () {
    if (checkAccess(employeeName)) {
      let realIntenetAccess = new RealInternetAcess();
      realIntenetAccess.grantAccess(employeeName);
    } else {
      console.log("Access Denied for ", employeeName);
    }
  };
}

module.exports = InternetAccessProxy;
