if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var passport = require('passport')
var Strategy = require('passport-facebook').Strategy;

module.exports = passport.use(new Strategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
}));