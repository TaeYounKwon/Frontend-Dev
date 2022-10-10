var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/api/books:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/api/authors', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/api/authors/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/api/books', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/api/authors', function(req, res, next) {
  res.send('respond with a resource');
});
router.patch('/api/books:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.patch('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.delete('/api/books:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/api/books-authors', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
