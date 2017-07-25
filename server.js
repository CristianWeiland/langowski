#!/usr/bin/env node

var express = require('express');
var session = require('express-session')
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var app = express();

// Load config file
var config = require('./config.js');
var port = config.port || 3000;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: 'top secret', resave: true, saveUninitialized: true }));
// Create DB connection
app.use(require('./middleware/db.js')(config));

app.listen(port, function() {
    console.log('Server listening on port ' + port + '.');
});

function checkAuth(req, res, next) {
	var token = req.body.token;

    if (req.session.token != token) {
        res.status(403).send('You are not authorized to view this page');
    } else {
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        next();
    }
}

/* Routes */
var auth = require('./routes/auth.js');
var employees = require('./routes/employees.js');

app.post('/api/login', auth.login);
app.post('/api/token', auth.checkToken);
app.get('/api/logout', auth.logout);
app.post('/api/employees', checkAuth, employees.get);
