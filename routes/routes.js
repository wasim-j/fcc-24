let routes_get = require('./get')
let routes_post = require('./post')
let routes_errors = require('./errors')

module.exports = app => {
  
  app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
  });
  
  routes_get(app);
  routes_post(app);
  routes_errors(app);
    
}