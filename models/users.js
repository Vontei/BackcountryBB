var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  ObservIds: Array,
  Comments: Array

})

var User = mongoose.model('User', userSchema);



module.exports = User;
