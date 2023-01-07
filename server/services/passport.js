/**
 * Services folder has files with helper modules and business logic, like Passport
 * Passport.js has all passport configurations 
 */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
    //const FacebookStrategy = require('passport-facebook-oauth').strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys'); //.. means go up one folder


/**
 * 1 argument = get something out of mongoose 
 * 2 arguments = load something into mongoose
 */
const User = mongoose.model('users'); //

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, done) => {
    new User({ googleId: profile.id }).save();
  })
);