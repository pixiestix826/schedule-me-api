var Mystique = require('mystique');

var AppointmentItemTransformer = Mystique.Transformer.extend({
  resourceName: 'appointmentItem',
  mapOut: function(appointmentItem) {
    return {
      id: appointmentItem.id,
      service: appointmentItem.service,
      name: appointmentItem.name,
      startTime: appointmentItem.startTime,
    };
  },

  mapIn(req) {
    return {
      service: req.getJson('appointmentItem.service'),
      name: req.getJson('appointmentItem.name'),
      startTime: req.getJson('appointmentItem.startTime'),
    };
  },
});

Mystique.registerTransformer('AppointmentItem', AppointmentItemTransformer);
