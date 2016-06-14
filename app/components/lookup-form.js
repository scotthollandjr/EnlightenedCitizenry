import Ember from 'ember';

export default Ember.Component.extend({
  showZipForm: true,
  actions: {
    inputZipButton() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('inputZipButton', params);
    }
  }
});
