import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    var queryParams = params.type.split("/");
    var url;
    var type = queryParams[0];
    var zip = queryParams[1];
    var apiKey1 = '&apikey=1bfb793d531244838fff07190868ef81';
    var apiKey2 = '?apikey=1bfb793d531244838fff07190868ef81';

    if (type === "legislators") {
      url = 'https://congress.api.sunlightfoundation.com/' + type + '/locate?zip=' + zip + apiKey1;
    } else {
      url = 'https://congress.api.sunlightfoundation.com/' + type + apiKey2;
    }

    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON.results;
    });
  }
});
