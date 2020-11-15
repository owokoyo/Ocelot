const OcelotLib = require('./OcelotLib');
OcelotLib.init();
OcelotLib.registerMethod('projects/randomText/get', function(query, reply){
  reply({
    body: "HI YOU GUYS"
  });
});
