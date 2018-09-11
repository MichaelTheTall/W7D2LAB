const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  // PubSub.subscribe('SolarSystem:all-animals-ready', (evt) => {
  //   const allAnimals = evt.detail;
  //   this.populate(allAnimals);
  // });

  this.element.addEventListener('click', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:input', selectedIndex);
  });
};

module.exports = SelectView;
