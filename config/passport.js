const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
//const keys = require("../routes/api/api");
const opts = {};

//var secretOrKey = "secret";

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
<<<<<<< HEAD
opts.secretOrKey = "secret";
=======
opts.secretOrKey = "secret"; //keys.secretOrKey;
>>>>>>> 0c04a4a8721a6e49cffd2dc4deb40269c529c0f5

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};