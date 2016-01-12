'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  service: { type: ObjectId, ref: 'Service', childPath: 'appointments' },
  name: { type: String },
  startTime: { type: Date, default: Date.now },
  length: { type: Number },
  title: { type: String },
};

var AppointmentItemSchema = new Schema(fields);

AppointmentItemSchema.plugin(relationship, {relationshipPathName: 'service'});

module.exports = mongoose.model('AppointmentItem', AppointmentItemSchema);
