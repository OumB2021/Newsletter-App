//jshint esversion: 6

const express = require('express');
const request = require('reqyest');
const bodyParser = require('body-parser');

const app = express();



app.listen(3000, function(){
  console.log('listening on 3000');
});