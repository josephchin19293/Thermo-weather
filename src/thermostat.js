'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.PSM_MAX_TEMPERATURE = 25;
  this._temperature = 20;
  this._powerSaving = true;
}
Thermostat.prototype.getCurrentTemperature = function(song) {
  return this._temperature;
};
Thermostat.prototype.increaseTemperature = function () {
  if(this.isMaximumTemperature()) {
    return;
  }
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
Thermostat.prototype.isMaximumTemperature = function () {
  if(this._powerSaving === true) {
    return this._temperature === this.PSM_MAX_TEMPERATURE;
  } else {
    return this._temperature === this.MAXIMUM_TEMPERATURE;
  };
};
Thermostat.prototype.isPowerSavingOn = function () {
  return this._powerSaving === true;
};
Thermostat.prototype.turnOffPSM = function () {
  this._powerSaving = false;
};
Thermostat.prototype.turnOnPSM = function () {
  this._powerSaving = true;
};
Thermostat.prototype.resetTemp = function () {
  this._temperature = this.DEFAULT_TEMPERATURE;
};
Thermostat.prototype.energyUsage = function () {
  if(this._temperature < 18) {
    return 'low-usage';
  }
  if(this._temperature > 18 && this._temperature < 25) {
    return 'medium-usage';
  }
  return 'high-usage';
};
