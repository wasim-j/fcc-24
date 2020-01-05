module.exports = (user, {description, duration, date}) => {
  
  // simple validation
  description = (description.length > 0) ? description : false;
  duration = (Number.isInteger(parseInt(duration))) ? parseInt(duration) : false;
  date = (new Date(date).toString() !== "Invalid Date") ? new Date(date) : new Date();
  let valid_exercise = description && duration && date;
  console.log(valid_exercise)
  console.log({description, duration, date})
  
  if(valid_exercise) {
    user.log = user.log.concat([{description, duration, date}]) //user.log.push({description, duration, date}); results in error
    return user.save()
  }
  return user;
}