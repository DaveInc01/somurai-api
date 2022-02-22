const express = require('express');
const router = express.Router();
const ChallangleController = require('../controllers/ChallangeController');

/* GET users listing. */
router.post('/', function(req, res, next) {
  ChallangleController.create(req.body, res)
});

module.exports = router;