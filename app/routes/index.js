import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    inputZipButton(params) {
      console.log(params);
      this.transitionTo('results', params.zip);
    }
  }
});
