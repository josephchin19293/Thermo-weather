'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature with the up button', function() {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('decreases temperature with the down button', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a minimum of 10 degrees', function() {
    for(var i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  it('has powersaving mode on by default', function() {
    expect(thermostat.isPowerSavingOn()).toEqual(true);
  });
  it('can switch powersaving mode on again', function() {
    thermostat.turnOffPSM();
    expect(thermostat.isPowerSavingOn()).toEqual(false);
    thermostat.turnOnPSM();
    expect(thermostat.isPowerSavingOn()).toEqual(true);
  });
  it('has a maximum of 32 degrees', function() {
    thermostat.turnOffPSM();
    for(var i = 0; i < 13; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });
  it('has powersaving mode on by default', function() {
    expect(thermostat.isPowerSavingOn()).toEqual(true)
  });
  describe('Reset button', function() {
    it('resets temp to 20 after increase', function() {
      thermostat.increaseTemperature();
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it('resets temp to 20 after decrease', function() {
      thermostat.decreaseTemperature();
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });
  describe('When PSM is on', function() {
    it('can switch powersaving mode off', function() {
      thermostat.turnOffPSM();
      expect(thermostat.isPowerSavingOn()).toEqual(false);
    });
    it('has a maximum of 25 degrees', function() {
      for(var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });
  describe('Displaying energy usage', function() {
    describe('When the temp is below 18 degrees', function() {
      it('should display low energy usage', function() {
        for(var i = 0; i < 3; i++) {
          thermostat.decreaseTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe('When the temp is above 18 but below 25 degrees', function() {
      it('should display medium energy usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('When the temp is above 25 degrees', function() {
      it('should display high energy usage', function() {
        for(var i = 0; i < 7; i++) {
          thermostat.increaseTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
})
