// Module dependencies.
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Mystique = require('mystique');
var api = {};

// ALL
api.professionals = function(req) {
  User.find().exec((err, results) => {
    req.store.renderCollection(results, 'Professional');
  });
};

// GET
api.professional = function(req) {
  User.findById(req.params.id).exec((err, model) => {
    if (err) {
      return res.status(500).send(err);
    }

    req.store.renderItem(model, 'Professional');
  });
};

router.get('/professionals', api.professionals);

router.route('/professionals/:id')
  .get(api.professional);

module.exports = router;
