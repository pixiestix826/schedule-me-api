var Mystique = require('mystique');

var AppointmentItemTransformer = Mystique.Transformer.extend({
  resourceName: 'AppointmentItem',
  mapOut: function(AppointmentItem) {
    return {
      id: AppointmentItem.id,
      date: AppointmentItem.date,
      name: AppointmentItem.name,
      time: AppointmentItem.time,
    };
  },

  mapIn(req) {
    return {
      date: req.getJson('AppointmentItem.date'),
      name: req.getJson('AppointmentItem.name'),
      time: req.getJson('AppointmentItem.time'),
    };
  },
});

Mystique.registerTransformer('AppointmentItem', AppointmentItemTransformer);
