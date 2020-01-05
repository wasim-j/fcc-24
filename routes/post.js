let add_user = require('../db/add_user');
let get_user = require('../db/get_user')
let add_exercise = require('../db/add_exercise')

module.exports = app => {
 
  // POST /api/exercise/new-user
  let api_route_add_user = "/api/exercise/new-user";
  
  app.post(api_route_add_user, async (req, res) => {
    let user_name = req.body.username;
    let new_user = await add_user(user_name);
    res.json({new_user});
  });
  
  // POST /api/exercise/add
  let api_route_add_exercise = "/api/exercise/add";
  
  app.post(api_route_add_exercise, async (req, res) => {
    let {userId, description, duration, date} = req.body;
    let user = await get_user(userId); 
    let msg = (user) ? await add_exercise(user, {description, duration, date}) : {error: "invalid id"}
    
    res.json({msg});
  });  
  
  


  
  
  
  
}