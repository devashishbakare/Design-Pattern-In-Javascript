const { Lights, AC, Music } = require("./Subsystem");
function HomeAutomationRemoteFacade() {
  this.lights = new Lights();
  this.music = new Music();
  this.ac = new AC();

  this.partyMode = function () {
    console.log("Party mode has been started");
    this.lights.dim();
    this.music.turnOn();
    this.ac.turnOn();
  };

  this.movieMode = function () {
    console.log("movie mode has been started");
    this.lights.dim();
    this.music.turnOn();
    this.ac.setTemperature();
    this.music.setVolume();
  };

  this.turnOfEverything = function () {
    console.log("Home Automation turn off..");
    this.lights.turnOff();
    this.ac.turnOff();
    this.music.turnOff();
  };
}
module.exports = HomeAutomationRemoteFacade;
