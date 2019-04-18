const Dogs = require('./models/dogs.js')
const DogView = require('./views/dog_view.js')
const BreedFormView = require('./views/breed_form_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const dogView = new DogView();
  dogView.bindEvents();

  const dogModel = new Dogs();
  dogModel.bindEvents();

  const breedFormView = new BreedFormView();
  breedFormView.bindEvents();

});
