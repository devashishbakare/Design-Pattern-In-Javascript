class Logger {
  logs = [];
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
    return this;
  }
  log(message) {
    console.log("message has been added", message);
    this.logs.push(message);
  }

  showLogs() {
    console.log(this.logs);
  }
}

const loggerInstance = new Logger();
Object.freeze(loggerInstance);
module.exports = loggerInstance;
