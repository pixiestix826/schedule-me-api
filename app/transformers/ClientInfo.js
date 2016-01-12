var Mystique = require('mystique');

var ClientInfoTransformer = Mystique.Transformer.extend({
  resourceName: 'clientInfo',
  mapOut: function(clientInfo) {
    return {
      id: clientInfo.id,
      firstName: clientInfo.firstName,
      lastName: clientInfo.lastName,
      email: clientInfo.email,
      address: clientInfo.address,
      payment: clientInfo.payment,
    };
  },

  mapIn(req) {
    return {
      firstName: req.getJson('clientInfo.firstName'),
      lastName: req.getJson('clientInfo.lastName'),
      email: req.getJson('clientInfo.email'),
      address: req.getJson('clientInfo.address'),
      payment: req.getJson('clientInfo.payment'),
    };
  },
});

Mystique.registerTransformer('ClientInfo', ClientInfoTransformer);
