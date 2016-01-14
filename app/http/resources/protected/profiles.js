// Module dependencies.
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Mystique = require('mystique');
var api = {};

// ALL
api.profiles = function(req, res) {
  User.findById(req.user).exec((err, model) => {
    if (err) {
      return res.status(500).send(err);
    }

    req.store.renderItem(model, 'Profile');
  });
};

api.editProfile = function(req, res) {
  var Transformer = Mystique.getTransformer('Profile');

  var data = Transformer.rawItem(req, Transformer.mapIn);

  return User.findById(req.params.id)
    .exec((err, model) => {
      if (err) {
        return res.status(500).send(err);
      }

      model.set(data);
      model.save((err) => {
        if (err) {
          return res.status(500).send(err);
        }

        req.store.renderItem(model, 'Profile');
      });
    });
};

router.get('/profiles', api.profiles);
router.route('/profiles/:id')
  .put(api.editProfile);

module.exports = router;
