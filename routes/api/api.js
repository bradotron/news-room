var express = require('express');
var router = express.Router();

// mongoose is our ODM
var mongoose = require("mongoose");
var db = require("../../models");

// Connect to the Mongo DB
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/newsRoom";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function(err, res) {
  if (err) {
    console.log("ERROR connecting to: " + MONGODB_URI + ". " + err);
  } else {
    console.log("Succeeded connected to: " + MONGODB_URI);
  }
});

// test route to see if the back end is happy
router.get('/test', function(req, res, next) {
  res.json({
    test: "you have received data from the back end /test"
  });
});

router.post('/articles', function(req, res, next) {
  console.log(req.body);
  res.json({
    message: "you hit the /api/articles POST route"
  });
});

module.exports = router;
