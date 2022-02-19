var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/exe-code', function(req, res, next) {
  IndexController.exeCode(req.body.code, res);
});

module.exports = router;
  