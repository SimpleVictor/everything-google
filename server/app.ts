/// <reference path="../typings/index.d.ts" />
import * as express from "express";
import { join } from "path";
let google = require('googleapis');
// let logger = require('morgan');
let cookieParser = require('cookie-parser');
let passport = require('passport');
let session = require('express-session');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let configAuth = require('../config/auth');
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";

const app: express.Application = express();

let myToken;
let myProfile;

// console.log(google.gmail);

app.disable("x-powered-by");


passport.serializeUser(function(user, done) {
    // done(null, user.id);
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    // Users.findById(obj, done);
    done(null, obj);
});

passport.use(new GoogleStrategy(

    // Use the API access settings stored in ./config/auth.json. You must create
    // an OAuth 2 client ID and secret at: https://console.developers.google.com
    configAuth.google,

    function(accessToken, refreshToken, profile, done) {
        myToken = accessToken;
        myProfile = profile;
        // console.log(profile);
        // Typically you would query the database to find the user record
        // associated with this Google profile, then pass that object to the `done`
        // callback.
        return done(null, profile);
    }
));




// app.use(logger('dev'));
app.use(cookieParser());
// required for passport
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
})); // session secret
app.use(passport.initialize());
app.use(passport.session());

app.use(favicon(join(__dirname, "../public", "favicon.ico")));
app.use(express.static(join(__dirname, '../public')));

app.use(json());
app.use(urlencoded({ extended: true }));

// import { protectedRouter } from "./routes/protected";

// api routes
// app.use("/", protectedRouter);


app.get('/auth/google',
    passport.authenticate('google', { scope: ['openid email profile https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/drive.metadata.readonly'] }), function(req, res){
        console.log("Went in here at least");
    });


app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/maps-api'
    }),
    function(req, res) {
        console.log("Authenticated successfully");
        // Authenticated successfully
        res.redirect('/');
    });

app.get("/testMe", function(req, res){
    console.log("You cam here");
})


app.get('/user/authenticate', ensureAuthenticated,function(req, res){

    let myData = {
        token: myToken,
        profile: myProfile,
        message: 'User is authenticated'
    };

    res.json(myData);
});

app.use('/client', express.static(join(__dirname, '../client')));



function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json("User is not authenticated");
};












// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {

    app.use(express.static(join(__dirname, '../node_modules')));

    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
