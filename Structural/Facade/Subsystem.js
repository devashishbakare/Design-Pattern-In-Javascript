function Music() {
  this.turnOn = function () {
    console.log("Music turn on");
  };

  this.setVolume = function () {
    console.log("Volumen has been set");
  };

  this.turnOff = function () {
    console.log("Music turn off");
  };
}

function AC() {
  this.turnOn = function () {
    console.log("AC turn on");
  };
  this.setTemperature = function () {
    console.log("Temperature has been set");
  };
  this.turnOff = function () {
    console.log("Ac turn off");
  };
}

function Lights() {
  this.turnOn = function () {
    console.log("Lights is on");
  };
  this.dim = function () {
    console.log("light is dim");
  };
  this.turnOff = function () {
    console.log("Light is off");
  };
}

module.exports = {
  Lights,
  AC,
  Music,
};
