const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

class Dogs {

  constructor() {
    this.data = []
  }

  bindEvents() {
    PubSub.subscribe('BreedFormView:form-submitted', (evt) => {
      const breed = evt.detail
      this.getData(breed)
    })
  }

  getData(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images`
    const requestHelper = new RequestHelper(url);

    requestHelper.get()
      .then(data => {
        this.data = data.message;
        PubSub.publish('Dogs:dog-data-loaded', this.data)
      })
      .catch(message => {
        console.error(message);
      })
  }

};

module.exports = Dogs;
