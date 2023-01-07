/**
 * Services folder has files with helper modules and business logic, like Passport
 * Passport.js has all passport configurations 
 */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
    //const FacebookStrategy = require('passport-facebook-oauth').strategy;
const keys = require('../config/keys'); //.. means go up one folder

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile:', profile);
  })
);