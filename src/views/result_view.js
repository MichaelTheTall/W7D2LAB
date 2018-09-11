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
  const planetName = document.createElement('h2');
  targetContainer.innerHTML = '';

  planetName.textContent = `${planet.name}`;
  targetContainer.appendChild(planetName);

  // targetContainer.textContent = ;
  // <h2 class="planet-name"></h2>
  // <ol>
  //   <li class="planet-orbit"></li>
  //   <li class="planet-day"></li>
  //   <li class="planet-area"></li>
  //   <li class="planet-vol"></li>
  //   <li class="planet-grav"></li>
  //   <li class="planet-moons"></li>
  // </ol>
  // <div class="planet-img"></div>
};

module.exports = ResultView;
