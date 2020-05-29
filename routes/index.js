var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let p = new Object();
  p.nombre ="Luis";
  p.edad = 28;
  res.json(p);
});

module.exports = router;
