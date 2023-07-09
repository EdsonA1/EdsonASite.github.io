/////------------------------------------------------------Server-------------------------------------------------------------------------- /////
//jshint esversion:6

const express = require("express");
const app = express();


// Home Page Get
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


// Home Page Post
app.post("/", function(req, res){

});



// function to listen for request
app.listen(3000, function(){
  console.log('Server is running on port 3000.');
});
