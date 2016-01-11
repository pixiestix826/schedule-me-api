var Mystique = require('mystique');

var ServiceItemTransformer = Mystique.Transformer.extend({
  resourceName: 'serviceItem',
  mapOut: function(serviceItem) {
    return {
      id: serviceItem.id,
      category: serviceItem.category,
      service: serviceItem.service,
      description: serviceItem.description,
      price: serviceItem.price,
      time: serviceItem.time,
    };
  },

  mapIn(req) {
    return {
      category: req.getJson('serviceItem.category'),
      service: req.getJson('serviceItem.service'),
      description: req.getJson('serviceItem.description'),
      price: req.getJson('serviceItem.price'),
      time: req.getJson('serviceItem.time'),
    };
  },
});

Mystique.registerTransformer('ServiceItem', ServiceItemTransformer);
