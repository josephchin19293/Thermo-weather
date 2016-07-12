function Thermostat() {
  this.temperature = 20;
}
Thermostat.prototype.getCurrentTemperature = function(song) {
  return this.temperature;
};
