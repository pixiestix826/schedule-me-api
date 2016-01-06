'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  date: { type: Date, default: Date.now },
  service: { type: String },
  price: { type: Number },
};

var ClientHistorySchema = new Schema(fields);



module.exports = mongoose.model('ClientHistory', ClientHistorySchema);
