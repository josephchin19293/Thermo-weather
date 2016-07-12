'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this._temperature = 20;
}
Thermostat.prototype.getCurrentTemperature = function(song) {
  return this._temperature;
};
Thermostat.prototype.increaseTemperature = function () {
  this._temperature++;
};
Thermostat.prototype.decreaseTemperature = function () {
  if(this.isMinimumTemperature()) {
    return;
  }
  this._temperature--;
};
Thermostat.prototype.isMinimumTemperature = function () {
  return this._temperature === this.MINIMUM_TEMPERATURE;
};
