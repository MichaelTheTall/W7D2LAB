const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:selected', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};

ResultView.prototype.render = function(planet){
  // const infoParagraph = document.createElement('p');
  // infoParagraph.textContent = `The ${animal.species}, of class '${animal.class}', has a maximum speed of ${animal.maxSpeed} km/h.`;
  // this.container.innerHTML = '';
  // this.container.appendChild(infoParagraph);
};

module.exports = ResultView;
