const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:selected', (evt) => {
    const planet = evt.detail;
    console.log(planet);
    this.render(planet);
  });
};

ResultView.prototype.render = function(planet){
  const targetContainer = document.querySelector('.planet-details');
  targetContainer.innerHTML = '';

  const planetName = document.createElement('h2');
  planetName.textContent = `${planet.name}`;
  targetContainer.appendChild(planetName);

  const planetInfo = document.createElement('p');
  planetInfo.setAttribute('style', 'white-space: pre;');
  planetInfo.textContent = `Day: ${planet.day} Earth days\r\nOrbit: ${planet.orbit} Earth days\r\nSurface Area: ${planet.surfaceArea} Earths\r\nVolume: ${planet.volume} Earths\r\nGravity: ${planet.gravity}g\r\nMoons: ${planet.moons}`;
  targetContainer.appendChild(planetInfo);

  const planetImage = document.createElement('img');
  planetImage.src = `./${planet.image}`;
  targetContainer.appendChild(planetImage);


};

module.exports = ResultView;
