# OcelotLib
For handling requests from OcelotReq

## Using OcelotLib

1. Create a new folder
2. Put OcelotLib inside

### Install these modules
- express (for http obviously)
- uuid (creates a image with uuid name for each request)
- jimp (creating images)

Create index.js file
```js
// Get OcelotLib and initialize it
const OcelotLib = require("./OcelotLib");
OcelotLib.init();
// Declare votes variable, set to 0
var votes = 0;
// When PNGRequest fires submitVote, increment votes by 1, and send back changed votes,
OcelotLib.registerMethod("/submitVote", function(){
  votes++;
  return {votes:votes};
});
```
