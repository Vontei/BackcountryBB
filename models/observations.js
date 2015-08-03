var mongoose = require('mongoose');

var observationSchema = new mongoose.Schema({
  UserId: String,
  title: String,
  userId: String,
})

var Observations = mongoose.model('Observations', observationSchema)

module.exports = Observations;
