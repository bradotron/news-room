var express = require('express');
var router = express.Router();

// mongoose is our ODM
var mongoose = require("mongoose");
var db = require("../../models");

// import the users router
var usersRouter = require("./users");
router.use("/users", usersRouter);

// import the scraping middleware
var scrape = require("../middleware/scrape");

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
  db.Article.create(req.body).then(dbArticle => {
    //console.log(`created an article: `);
    //console.log(dbArticle);
    res.status(200).json(dbArticle);
  }).catch(err => {
    res.status(400).json(err);
  });
});

router.get('/scrape/:source/:search', function(req, res, next) {
  switch(req.params.source) {
    default: 
      console.log("invalid source: " + req.params.source);
      res.sendStatus(400);
      break;

    case "New York Times":
      scrape.searchNYT(req.params.search).then(data => {
        res.json(data)
      }).catch(err => {
        res.sendStatus(500);
      });
  }
});

module.exports = router;
