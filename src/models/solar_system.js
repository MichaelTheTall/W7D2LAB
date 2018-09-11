const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  // PubSub.publish('SolarSystem:selected', LOLWAT);

  PubSub.subscribe('SelectView:input', (evt) => {
    const selectedIndex = evt.detail;
    this.publishResult(selectedIndex);
  });
};

SolarSystem.prototype.publishResult = function(planetIndex){
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('SolarSystem:selected', selectedPlanet)
};

module.exports = SolarSystem;
