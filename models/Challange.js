const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Challange = new Schema({
  name: String,
  description: String,
  code: String
});

module.exports = Challange;
