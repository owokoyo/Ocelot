const OcelotLib = require('./OcelotLib');
OcelotLib.registerMethod('projects/randomText/get', function(query, reply){
  reply({
    body: "HI YOU GUYS"
  });
});
