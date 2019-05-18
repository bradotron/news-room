var createError = require('http-errors'); 
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api/api');


//=======================Stefan Authentication:===============================//
const bodyParser = require("body-parser");
//====================================passport:===============================//
const passport = require("passport");
const users = require("./routes/api/users");//???????redundant?

<<<<<<< HEAD



var app = express();


=======
// create the app object
var app = express();

>>>>>>> 0c04a4a8721a6e49cffd2dc4deb40269c529c0f5
// Passport middleware
app.use(passport.initialize());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport config
require("./config/passport")(passport);

//=====================================passport:==============================//

<<<<<<< HEAD

=======
>>>>>>> 0c04a4a8721a6e49cffd2dc4deb40269c529c0f5
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
