const mongoose = require('mongoose');
const User = require('./models/User');

module.exports =  id => {
  let id_valid = (mongoose.Types.ObjectId.isValid(id)) ? true : false;
  
  if(id_valid) {
    return User.findById(id, (err, record) => (err) ? false : record);
  }
  return false;
}