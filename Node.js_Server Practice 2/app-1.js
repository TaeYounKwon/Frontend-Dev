var express = require('express');
var app = express();

// Create the router object
var myRouter = require('./myrouter.js');

// Connect the router
app.use('/', myRouter);

app.listen(3000, function ServerListener() {
    console.log('Sample App with router');
});
