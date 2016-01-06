var Mystique = require('mystique');

var ClientInfoTransformer = Mystique.Transformer.extend({
  resourceName: 'ClientInfo',
  mapOut: function(ClientInfo) {
    return {
      id: ClientInfo.id,
      firstName: ClientInfo.firstName,
      lastName: ClientInfo.lastName,
      email: ClientInfo.email,
      address: ClientInfo.address,
      payment: ClientInfo.payment,
    };
  },

  mapIn(req) {
    return {
      firstName: req.getJson('ClientInfo.firstName'),
      lastName: req.getJson('ClientInfo.lastName'),
      email: req.getJson('ClientInfo.email'),
      address: req.getJson('ClientInfo.address'),
      payment: req.getJson('ClientInfo.payment'),
    };
  },
});

Mystique.registerTransformer('ClientInfo', ClientInfoTransformer);
