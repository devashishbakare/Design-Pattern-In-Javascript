const { UserService, userInstance } = require("./UserService");
const { ActivityService, activityInstance } = require("./ActivityService");
const Logger = require("./Logger");

const userObject = new UserService();
const activityObject = new ActivityService();

userObject.addUserService();
activityObject.addActivity();
Logger.showLogs();

if (userObject.showInstanceUse() === activityObject.showInstanceUse()) {
  console.log("Commong Object is being shared");
}
