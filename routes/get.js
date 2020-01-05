let get_users = require('../db/get_users');
let get_user = require('../db/get_user');
let filter_log = require('../db/filter_log')

module.exports = app => {

  // GET /api/exercise/users
  let api_route_all_users = "/api/exercise/users";
  
  app.get(api_route_all_users, async (req, res) => {
    let users = await get_users()
    res.json(users);
  });
  
  // GET /api/exercise/log?{userId}[&from][&to][&limit]
  let api_route_user_exercise_log = "/api/exercise/log?";
  
  app.get(api_route_user_exercise_log, async (req, res) => {
    let {userId, from, to, limit} = req.query;
    let user = await get_user(userId);     
    let msg = (user) ? filter_log(user.log, {from, to, limit}) : {error: "invalid id"};  
    res.json(msg);
  });
     
}