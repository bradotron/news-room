var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

// mongoose is our ODM
var mongoose = require('mongoose');
var db = require('../../models');

// import the users router
var usersRouter = require('./users');
router.use('/users', usersRouter);

// import the scraping middleware
var scrape = require('../middleware/scrape');

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/newsRoom';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function(err, res) {
	if (err) {
		console.log('ERROR connecting to: ' + MONGODB_URI + '. ' + err);
	} else {
		console.log('Succeeded connected to: ' + MONGODB_URI);
	}
});

//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
	const header = req.headers['authorization'];

	if (typeof header !== 'undefined') {
		const bearer = header.split(' ');
		const token = bearer[1];

		req.token = token;
		next();
	} else {
		//If header is undefined return Forbidden (403)
		res.sendStatus(403);
	}
};

// test route to see if the back end is happy
router.get('/test', function(req, res) {
	res.json({
		test: 'you have received data from the back end /test',
	});
});

router.get('/protected', checkToken, function(req, res, next) {
	// verify the token that was generated for the user
	jwt.verify(req.token, 'secret', err => {
		if (err) {
			//If error send Forbidden (403)
			console.log('ERROR: Could not connect to the protected route');
			res.sendStatus(403);
		} else {
			//If token is successfully verified, we can send the autorized data
			res.json({
				message: 'Successful log in',
				data: "You've received protected data",
			});
			console.log('SUCCESS: Connected to protected route');
		}
	});
});

router.get('/articles', function(req, res, next) {
	//console.log(req);
	db.Article
	.find({})
	.sort({date: 'desc'})
	.then(dbArticle => {
		res.status(200).json(dbArticle);
	})
	.catch(err => {
		res.status(400).json(err);
	});
});


  // DELETE route for deleting posts
router.delete('/articles/:id', function(req, res, next) {
  db.Article.deleteOne({
  _id: req.params.id
})
	.then(dbArticle => {
		console.log(dbArticle);
    res.status(200).json(dbArticle);
})
	.catch(err => {
		res.status(400).json(err);
	})
	//console.log(req.params);
  });


  // these route adds a comment to an article database
router.post("/comments", function(req, res) {
	//console.log("router.post", req.body);
	//{ articleId: '5ce343b58f9bbbe893f9d058', comment: "i'm a dumb" }
	db.Comment.create({
	  //author: req.body.author,
	  comment: req.body.comment
	})
	  .then(dbComment => {
		return db.Article.findOneAndUpdate(//req.body.articleId
		  { _id: req.body.articleId },
		  { $push: { comments: dbComment._id } },
		  { new: true }
		);
	  })
	  .then(function(dbArticle) {
		res.json(dbArticle);
	  })
	  .catch(err => {
		res.json(err);
	  });
	});

	/*=========================================================================*/
router.get('/comments/byArticleId/:id', function(req, res) {

	//id = "5ce8c1e946554a037146088e"
	//console.log("get comments router: ", req.params.id);
	db.Article
	.findOne({
		_id: req.params.id
	})
	.then(dbArticle => {
		//console.log("comments");
		//console.log(dbArticle);
		//console.log(dbArticle.comments)
		return db.Comment.find({_id: {$in: dbArticle.comments}});
	})
	.then(comments => {
		res.status(200).json(comments);
	})
	.catch(err => {
		res.status(400).json(err);
	});

});

router.get('/articles', function(req, res, next) {
	//console.log(req);
	//res.send(200);//.exec(function(err, docs) { ... });//db.Article.find({})
	db.Article
	.find({})
	.sort({date: 'desc'})
	.then(dbArticle => {
		res.status(200).json(dbArticle);
	})
	.catch(err => {
		res.status(400).json(err);
	});
});
//db.comments.find({_id: {$in: [ObjectId('5cef0a12b7b15ec856332935'), ObjectId('5cef0ca2a3a68ee2147b8576')]}})
//db.comments.find({_id: {$in: }})

	/*=========================================================================*/
	
router.post('/articles', function(req, res, next) {
	console.log(req.body);
	db.Article.create(req.body)
		.then(dbArticle => {
			//console.log(`created an article: `);
			//console.log(dbArticle);
			res.status(200).json(dbArticle);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

router.get('/scrape/:source/:search', function(req, res, next) {
	switch (req.params.source) {
		default:
			console.log('invalid source: ' + req.params.source);
			res.sendStatus(400);
			break;

		case 'New York Times':
			scrape
				.searchNYT(req.params.search)
				.then(data => {
					res.json(data);
				})
				.catch(err => {
					res.status(500).json(err);
				});
			break;

		case 'Yahoo':
			scrape
				.searchYahoo(req.params.search)
				.then(data => {
					res.json(data);
				})
				.catch(err => {
					res.status(500).json(err);
				});
			break;

		case 'Test':
			scrape
				.searchTest(req.params.search)
				.then(data => {
					res.json(data);
				})
				.catch(err => {
					res.status(500).json(err);
				});
			break;
	}
});

module.exports = router;
