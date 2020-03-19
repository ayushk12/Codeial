const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const env = require("./environment");

const user = require("../models/user");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
  secretOrKey: env.jwt_secret
};

passport.use(
  new JWTStrategy(opts, function(jwtPayload, done) {
    user.findById(jwtPayload._id, function(err, user) {
      if (err) {
        console.log("Error in finding user from jWT");
        return;
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  })
);

module.exports = passport;
