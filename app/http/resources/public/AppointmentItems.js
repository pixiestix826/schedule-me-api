// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.AppointmentItems = function(req) {
  return req.store.recordCollection('AppointmentItem');
};

// GET
api.AppointmentItem = function(req) {
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

router.get('/AppointmentItems', api.AppointmentItems);
router.post('/AppointmentItems', api.addAppointmentItem);

router.route('/AppointmentItems/:id')
  .get(api.AppointmentItem)
  .put(api.editAppointmentItem)
  .delete(api.deleteAppointmentItem);

module.exports = router;
