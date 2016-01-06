// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.ClientHistories = function(req) {
  return req.store.recordCollection('ClientHistory');
};

// GET
api.ClientHistory = function(req) {
  return req.store.recordItemById('ClientHistory', req.params.id);
};

// POST
api.addClientHistory = function(req) {
  return req.store.createRecord('ClientHistory');
};

// PUT
api.editClientHistory = function(req) {
  return req.store.updateRecord('ClientHistory', req.params.id);
};

// DELETE
api.deleteClientHistory = function(req) {
  return req.store.destroyRecord('ClientHistory', req.params.id);
};

router.get('/ClientHistories', api.ClientHistories);
router.post('/ClientHistories', api.addClientHistory);

router.route('/ClientHistories/:id')
  .get(api.ClientHistory)
  .put(api.editClientHistory)
  .delete(api.deleteClientHistory);

module.exports = router;
