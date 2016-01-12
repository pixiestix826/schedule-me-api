var Mystique = require('mystique');

var ClientHistoryTransformer = Mystique.Transformer.extend({
  resourceName: 'clientHistory',
  mapOut: function(clientHistory) {
    return {
      id: clientHistory.id,
      date: clientHistory.date,
      service: clientHistory.service,
      price: clientHistory.price,
    };
  },

  mapIn(req) {
    return {
      date: req.getJson('clientHistory.date'),
      service: req.getJson('clientHistory.service'),
      price: req.getJson('clientHistory.price'),
    };
  },
});

Mystique.registerTransformer('ClientHistory', ClientHistoryTransformer);
