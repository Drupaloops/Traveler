var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/todo', function(req, res, next) {
  res.render('todo', { title: 'toDo' });
});

router.post('/account/signin', function(req, res, next) {
  console.log('signin success');
  res.send({
    status: 1,
    mobileNo: '18221310296'
  });
});

module.exports = router;
