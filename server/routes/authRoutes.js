/**
 * Routes folder has 1 file for each general set or group of routes we have
 * Right now, we have 1 file for our 2 routes since they're similar in function
 */
const passport = require('passport'); //requiring passport npm module, not passport.js file

//export = returning this function
module.exports = (app) => {
  app.get(
    '/auth/google', 
    passport.authenticate('google', { //google strategy has internal identifier of 'google' which is how passport knows to take this string and use the Google Strategy 
      scope: ['profile', 'email'] //google has internal list of scopes/permissions - profile, email, contacts, images, etc. etc. we just need profile and email
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // req = object. incoming request. res = object. outgoing response
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};