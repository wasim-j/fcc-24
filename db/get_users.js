const User = require('./models/User');

module.exports = () => User.find({}).select('_id username'); // selecting the `_id` and `username` fields
