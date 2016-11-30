var mongoose = require('../config/db');

var userSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  password: String
});

module.exports = mongoose.model('User', userSchema);
