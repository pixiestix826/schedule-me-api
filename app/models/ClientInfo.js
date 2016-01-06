'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  address: { type: String },
  payment: { type: String },
};

var ClientInfoSchema = new Schema(fields);



module.exports = mongoose.model('ClientInfo', ClientInfoSchema);
