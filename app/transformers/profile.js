var Mystique = require('mystique');

var ProfileTransformer = Mystique.Transformer.extend({
  resourceName: 'profile',
  mapOut: function(profile) {
    return {
      id: profile.id,
      email: profile.email,
      roles: profile.roles,
      firstName: profile.firstName,
      lastName: profile.lastName,
      specialty: profile.specialty,
      phone: profile.phone,
      clientHistory: profile.clientHistory,
      calendarAppointments: profile.calendarAppointments,
      clientAppointments: profile.clientAppointments,
    };
  },

  mapIn(req) {
    return {
      email: req.getJson('profile.email'),
      specialty: req.getJson('profile.specialty'),
      phone: req.getJson('profile.phone'),
      roles: req.getJson('profile.roles'),
      firstName: req.getJson('profile.firstName'),
      lastName: req.getJson('profile.lastName'),
    };
  },
});

Mystique.registerTransformer('Profile', ProfileTransformer);
