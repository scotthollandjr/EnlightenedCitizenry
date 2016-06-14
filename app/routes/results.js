import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log("2", params);
    var url = 'https://congress.api.sunlightfoundation.com/legislators/locate?zip=' + params.zip + '&apikey=1bfb793d531244838fff07190868ef81';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON.results;
    });
  }
});
