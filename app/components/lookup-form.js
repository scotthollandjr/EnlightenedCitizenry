import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    inputZipButton() {
      var params = {
        zip: this.get('zip'),
        type: this.get('type')
      };
      this.sendAction('inputZipButton', params);
    }
  }
});
