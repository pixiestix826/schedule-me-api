var Mystique = require('mystique');

var ClientHistoryTransformer = Mystique.Transformer.extend({
  resourceName: 'ClientHistory',
  mapOut: function(ClientHistory) {
    return {
      id: ClientHistory.id,
      date: ClientHistory.date,
      service: ClientHistory.service,
      price: ClientHistory.price,
    };
  },

  mapIn(req) {
    return {
      date: req.getJson('ClientHistory.date'),
      service: req.getJson('ClientHistory.service'),
      price: req.getJson('ClientHistory.price'),
    };
  },
});

Mystique.registerTransformer('ClientHistory', ClientHistoryTransformer);
