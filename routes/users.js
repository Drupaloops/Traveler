var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/todo', function(req, res, next) {
  res.render('todo', { title: 'toDo' });
});

module.exports = router;
