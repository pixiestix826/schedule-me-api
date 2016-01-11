// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.serviceItems = function(req) {
  return req.store.recordCollection('ServiceItem');
};

// GET
api.serviceItem = function(req) {
  return req.store.recordItemById('ServiceItem', req.params.id);
};

// POST
api.addServiceItem = function(req) {
  return req.store.createRecord('ServiceItem');
};

// PUT
api.editServiceItem = function(req) {
  return req.store.updateRecord('ServiceItem', req.params.id);
};

// DELETE
api.deleteServiceItem = function(req) {
  return req.store.destroyRecord('ServiceItem', req.params.id);
};

router.get('/serviceItems', api.serviceItems);
router.post('/serviceItems', api.addServiceItem);

router.route('/serviceItems/:id')
  .get(api.serviceItem)
  .put(api.editServiceItem)
  .delete(api.deleteServiceItem);

module.exports = router;
