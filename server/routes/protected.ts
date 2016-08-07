import { Router } from "express";
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let configAuth = require('../../config/auth');
let passport = require('passport');
const protectedRouter: Router = Router();

passport.use(new GoogleStrategy(

    // Use the API access settings stored in ./config/auth.json. You must create
    // an OAuth 2 client ID and secret at: https://console.developers.google.com
    configAuth.google,

    function(accessToken, refreshToken, profile, done) {
        console.log("yeahh buddy");
        // Typically you would query the database to find the user record
        // associated with this Google profile, then pass that object to the `done`
        // callback.
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    // done(null, user.id);
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    // Users.findById(obj, done);
    done(null, obj);
});

protectedRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['openid email profile'] }), function(){
        console.log("Went in here at least");
    });


protectedRouter.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/maps-api'
    }),
    function(req, res) {
        console.log("Authenticated successfully");
        // Authenticated successfully
        res.redirect('/');
    });






export {protectedRouter}





