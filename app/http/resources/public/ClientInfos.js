// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.ClientInfos = function(req) {
  return req.store.recordCollection('ClientInfo');
};

// GET
api.ClientInfo = function(req) {
  return req.store.recordItemById('ClientInfo', req.params.id);
};

// POST
api.addClientInfo = function(req) {
  return req.store.createRecord('ClientInfo');
};

// PUT
api.editClientInfo = function(req) {
  return req.store.updateRecord('ClientInfo', req.params.id);
};

// DELETE
api.deleteClientInfo = function(req) {
  return req.store.destroyRecord('ClientInfo', req.params.id);
};

router.get('/ClientInfos', api.ClientInfos);
router.post('/ClientInfos', api.addClientInfo);

router.route('/ClientInfos/:id')
  .get(api.ClientInfo)
  .put(api.editClientInfo)
  .delete(api.deleteClientInfo);

module.exports = router;
