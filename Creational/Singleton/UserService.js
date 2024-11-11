const loggerInstance = require("./Logger");

class UserService {
  addUserService() {
    loggerInstance.log("User Service has been added");
  }
  showInstanceUse() {
    return loggerInstance;
  }
}

module.exports = {
  userInstance: { loggerInstance },
  UserService,
};
