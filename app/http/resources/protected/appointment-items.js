// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.appointmentItems = function(req) {
  return req.store.recordCollection('AppointmentItem', {include: ['service']});
};

// GET
api.appointmentItem = function(req) {
  return req.store.recordItemById('AppointmentItem', req.params.id, {include: ['service']});
};

// POST
api.addAppointmentItem = function(req) {
  return req.store.createRecord('AppointmentItem', {
    include: ['service'],
    beforeSave(model, save) {
      if (model.service) {
        model.client = req.user;
      }
      save();
    },
  });
};

// PUT
api.editAppointmentItem = function(req) {
  return req.store.updateRecord('AppointmentItem', req.params.id, {include: ['service']});
};

// DELETE
api.deleteAppointmentItem = function(req) {
  return req.store.destroyRecord('AppointmentItem', req.params.id);
};

router.get('/appointmentItems', api.appointmentItems);
router.post('/appointmentItems', api.addAppointmentItem);

router.route('/appointmentItems/:id')
  .get(api.appointmentItem)
  .put(api.editAppointmentItem)
  .delete(api.deleteAppointmentItem);

module.exports = router;
