function RealInternetAcess(employeeName) {
  this.employeeName = employeeName;

  this.grantAccess = function (employeeName) {
    console.log("Access Has been granted for ", employeeName);
  };
}

module.exports = RealInternetAcess;
