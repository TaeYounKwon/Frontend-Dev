var express = require('express');
var app = express();
var myRouter = require('./myrouter.js');
// Connect the router to the application
app.use('/myapp', myRouter);
app.listen(3000, function ServerListener() {
    console.log('Sample App with router with a different path');
});
