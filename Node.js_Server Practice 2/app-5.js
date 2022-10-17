var express = require('express');
var app = express();
// all with root!
app.all('/', function HandleAllRequests(request, response, next){
   console.log('Request from: ' + 	request.connection.remoteAddress);
   next();
});

// This responds with "Hello World" on the homepage
app.get('/', function HandleHomeGet(request, response) {
   console.log("Got a GET request for the homepage");
   response.send('Hello GET');
});

// This responds a POST request for the homepage
app.post('/', function HandleHomePost(request, response) {
   console.log("Got a POST request for the homepage");
   response.send('Hello POST');
});
// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function HandleUserDel(request, response) {
   console.log("Got a DELETE request for /del_user");
   response.send('Hello DELETE');
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function HandleUserGet(request, response) {
   console.log("Got a GET request for /list_user");
   response.send('Page Listing');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function HandlePatterGet(request, response) {
   console.log("Got a GET request for /ab*cd");
   response.send('Page Pattern Match');
});

var server = app.listen(3000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
