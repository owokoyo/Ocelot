var counter = 0;
var ids = {};
module.exports = function(query){
  var idString = `${query.gameId}/${query.userId}/${query.sessionId}`;
  if (!ids[idString]) {
    ids[idString] = ++counter;
  }
  return "u:"+ids[idString].toString(32)
}
