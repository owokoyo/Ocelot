# OcelotLib
For handling requests from OcelotReq



## Using OcelotLib

### Prerequisites:
- node
- heroku (or whatever thing ur hosting this on)
- git

### Instructions
1. Create a new folder
2. run
```
  git init
  npm init
  heroku create whateverAppName
```
3. Put OcelotLib inside

4. Install these modules
    - express (for http obviously)
    - uuid (creates a image with uuid name for each request)
    - jimp (creating images)

6. Create index.js file
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

5. Push that app to heroku
```
git add .
git commit -m commit
git push heroku master
```
