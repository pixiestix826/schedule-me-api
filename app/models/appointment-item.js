'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  service: { type: ObjectId, ref: 'ServiceItem', childPath: 'appointments' },
  name: { type: String },
  startTime: { type: Date, default: Date.now },
  length: { type: Number },
  title: { type: String },
  client: { type: ObjectId, ref: 'User', childPath: 'clientAppointments' },
};

var AppointmentItemSchema = new Schema(fields);

AppointmentItemSchema.plugin(relationship, {relationshipPathName: 'service'});
AppointmentItemSchema.plugin(relationship, {relationshipPathName: 'client'});

module.exports = mongoose.model('AppointmentItem', AppointmentItemSchema);
