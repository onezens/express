var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '主页' });
});
router.get('/test', function(req, res, next) {

    res.send('Hello world!');
})

/// ：首页
///login ：用户登录
///reg ：用户注册
///post ：发表文章
///logout ：登出

router.get('/login', function(req, res, next){

    res.render('login', {title : '登录'});

});
router.get('/reg', function(req, res, next){

    res.render('reg', {title : '注册'});

});

router.get('/post', function(req, res, next){

    res.render('post', {title : '发表文章'});

});

router.get('/logout', function(req, res, next){

    res.render('logout', {title : '登出'});

});

module.exports = router;
