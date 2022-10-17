var express = require('express');
var app = express();
var myRouter = require('./myrouter.js');

app.use('/myapp', myRouter);
//Serves static content from directory public
app.use('/myapp', express.static('public'));

app.listen(3000, function ServerListener() {
    console.log('Sample App with router. This app serves static content');
});
