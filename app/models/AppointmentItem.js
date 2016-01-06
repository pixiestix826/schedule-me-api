'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  date: { type: Date, default: Date.now },
  name: { type: String },
  time: { type: String },
};

var AppointmentItemSchema = new Schema(fields);



module.exports = mongoose.model('AppointmentItem', AppointmentItemSchema);
