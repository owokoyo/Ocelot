/*
  Created by Owokoyo
  11/14/2020
*/
const express = require('express');
let expressInstance = express();
const encode = require("./encode.js");
const PORT = process.env.PORT || 5000;
const bp = require('body-parser');
const fs = require('fs')
const generateUUID = require('uuid').v4;
const path = require('path')
expressInstance.use(bp.json()); // for parsing application/json

function decodeQuery(query){
  var q = {};
  for (p in query) {
    q[p] = JSON.parse(query[p]);
  }
  return q;
}

module.exports = {
  setExpressInstance: function(expi){
    expressInstance = expi
  },
  init: function(){
    expressInstance.listen(PORT, () => console.log(`OcelotLib listening on ${ PORT }`));
  },
  registerMethod: function(urlpath, callback){
    expressInstance.get(urlpath, function(req, res){
      let query = req.query;
      var textResponse = !!query.textResponse;
      if (!query.queryNotEncoded) {
        query = decodeQuery(query)
      }
      callback(query, function(response){
        response.status = response.status || (response.error?"error":"ok"); //automatically set response.status
        if (textResponse){
          //send the response as text if ?textResponse=true
          res.send(response);
        } else {
          //send the response as json encoded into image if there wasnt a textResponse parameter
          let resultPath = path.join(__dirname, generateUUID()+".png"); //generate a uuid for the image
          //encode will convert our json object response into a string into a image
          encode(response, resultPath, image=>{
            res.sendFile(resultPath, ()=>{  //send image to client
              fs.unlink(resultPath,a=>{}) //delete image
            })
          })
        }
      })
    });
  }
}
