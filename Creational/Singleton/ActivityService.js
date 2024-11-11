const loggerInstance = require("./Logger");

class ActivityService {
  addActivity() {
    loggerInstance.log("Activity has been added");
  }
  showInstanceUse() {
    return loggerInstance;
  }
}

module.exports = {
  activityInstance: { loggerInstance },
  ActivityService,
};
