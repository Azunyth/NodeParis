var mongoose = require('mongoose');
var conf = require('./dbconf');

var connectionString = conf.driver + '://' + conf.server + '/' + conf.db;
mongoose.connect(connectionString);

module.exports = mongoose;
