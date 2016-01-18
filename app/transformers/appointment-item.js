var Mystique = require('mystique');

var AppointmentItemTransformer = Mystique.Transformer.extend({
  resourceName: 'appointmentItem',
  mapOut: function(appointmentItem) {
    return {
      id: appointmentItem.id,
      service: appointmentItem.service,
      name: appointmentItem.name,
      startTime: appointmentItem.startTime,
      length: appointmentItem.length,
      title: appointmentItem.title,
      client: appointmentItem.client,
      professional: appointmentItem.professional,
    };
  },

  mapIn(req) {
    return {
      service: req.getJson('appointmentItem.service'),
      name: req.getJson('appointmentItem.name'),
      startTime: req.getJson('appointmentItem.startTime'),
      length: req.getJson('appointmentItem.length'),
      title: req.getJson('appointmentItem.title'),
      professional: req.getJson('appointmentItem.professional'),
    };
  },
});

Mystique.registerTransformer('AppointmentItem', AppointmentItemTransformer);
