var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('router');
  res.render('index', { title: 'Express' });
});

router.get('/static/index.html', function(req, res, next) {
    console.log('router1');
    res
//    res.static('public/api');
//    express.static('public/api');
});

module.exports = router;
