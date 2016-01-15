var Mystique = require('mystique');

var ProfessionalTransformer = Mystique.Transformer.extend({
  resourceName: 'professional',
  mapOut: function(professional) {
    return {
      id: professional.id,
      email: professional.email,
      firstName: professional.firstName,
      lastName: professional.lastName,
      specialty: professional.specialty,
      phone: professional.phone,
      calendarAppointments: professional.calendarAppointments,
    };
  },

  mapIn(req) {
    return {
      email: req.getJson('professional.email'),
      address: req.getJson('professional.address'),
      roles: req.getJson('professional.roles'),
      firstName: req.getJson('professional.firstName'),
      lastName: req.getJson('professional.lastName'),
    };
  },
});

Mystique.registerTransformer('Professional', ProfessionalTransformer);
