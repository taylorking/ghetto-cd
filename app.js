var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var data = fs.readFileSync("secret.json");
data = JSON.parse(data);
server.use(bodyParser.json());
var sys = require('sys');
var exec = require('child_process').exec;

server.post('/commit', function(req,res) {
    child = exec('/bin/bash git_update.sh', function(error, stdout, stderr) {
      console.log(stdout);
    }); 
  res.send();
  });
server.listen(3000);
