module.exports = (log, {from, to, limit}) => {
  //console.log(log);
  if (log.length === 0) return log;
  
  // simple validation
  // new Date(0) = Thu Jan 01 1970 01:00:00
  from = (new Date(from).toString() !== "Invalid Date") ? new Date(from) : new Date(0);
  to = (new Date(to).toString() !== "Invalid Date") ? new Date(to) : new Date();
  limit = (Number.isInteger(parseInt(limit))) ? parseInt(limit) : 999;
  //console.log({from, to, limit})
  
  // within_date_range = (exercise.date > from) && (exercise.date < to)
  return log.filter( exercise => (exercise.date > from) && (exercise.date < to)).slice(0,limit);  
}

// was tempted to use the mongo aggregate method: https://stackoverflow.com/questions/16845191/mongoose-finding-subdocuments-by-criteria
// in the end thought I would filter through the array using vanilla js