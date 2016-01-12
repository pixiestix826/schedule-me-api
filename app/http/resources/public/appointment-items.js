// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.appointmentItems = function(req) {
  return req.store.recordCollection('AppointmentItem');
};

// GET
api.appointmentItem = function(req) {
  return req.store.recordItemById('AppointmentItem', req.params.id);
};

// POST
api.addAppointmentItem = function(req) {
  return req.store.createRecord('AppointmentItem');
};

// PUT
api.editAppointmentItem = function(req) {
  return req.store.updateRecord('AppointmentItem', req.params.id);
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
