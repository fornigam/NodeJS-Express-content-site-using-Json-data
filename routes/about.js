var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('about', {
    title: 'Home',
    name: 'John Doe'
  });
});

module.exports = router;
