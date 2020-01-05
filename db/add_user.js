const User = require('./models/User');

module.exports = function(name){
  // @ name (string) 
  // returns a promise
  
  const project = new User({
    username: name,
    issues: []
  })
  return project.save() // project.save() returns a promise which if successful will return the project
}