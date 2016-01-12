'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  category: { type: String },
  service: { type: String },
  description: { type: String },
  price: { type: Number },
  time: { type: Number },
  appointments: [{ type: ObjectId, ref: 'AppointmentItem' }],
};

var ServiceItemSchema = new Schema(fields);

module.exports = mongoose.model('ServiceItem', ServiceItemSchema);
