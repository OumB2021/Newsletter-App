const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [{
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: firstName,
            LNAME: lastName
        }
    }]
  };

  var jsonData = JSON.stringify(data);

  const url = 

  https.request(url, options, function(response){

  });

});

app.listen(3000, function(){
  console.log('listening on 3000');
});

//d14473a575136c7aebeba86ac5d46607-us8
//e4b700f286