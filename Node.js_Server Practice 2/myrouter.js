var express = require('express');	// imports the express library
var router = express.Router();		// Router object for routes

// Setting home route response
router.get('/', function handleRootGet(request, response) {
    response.send('Home Page');
});
// Setting the more-info response
router.get('/more-info', function handleMoreInfoGet(request, response) {
    response.send('More information is supposed to be found here');
});

// Exporting the router "object"
module.exports = router;
