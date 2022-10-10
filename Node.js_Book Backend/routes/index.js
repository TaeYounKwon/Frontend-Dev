var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/books:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.delete('/api/books:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.patch('/api/books:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
router.get('/api/books:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/api/authors', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/api/authors/:id', function(req, res, next) {
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
router.delete('/api/books:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/api/books-authors', function(req, res, next) {
  res.send('respond with a resource');
});
 **/
module.exports = router;
