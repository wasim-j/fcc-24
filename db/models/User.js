const mongoose = require('mongoose');
const exercise_schema = require('./Exercise')

var user_schema = new mongoose.Schema({
  username: String,
  log: [exercise_schema]
});

module.exports = mongoose.model('users', user_schema);