var Mystique = require('mystique');

var ProfileTransformer = Mystique.Transformer.extend({
  resourceName: 'profile',
  mapOut: function(profile) {
    return {
      id: profile.id,
      email: profile.email,
      address: profile.address,
      roles: profile.roles,
      firstName: profile.firstName,
      lastName: profile.lastName,
    };
  },

  mapIn(req) {
    return {
      email: req.getJson('profile.email'),
      address: req.getJson('profile.address'),
      roles: req.getJson('profile.roles'),
      firstName: req.getJson('profile.firstName'),
      lastName: req.getJson('profile.lastName'),
    };
  },
});

Mystique.registerTransformer('Profile', ProfileTransformer);
